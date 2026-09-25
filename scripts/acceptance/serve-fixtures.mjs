import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const args = process.argv.slice(2);
const portFlag = args.indexOf("--port");
const port = Number(portFlag >= 0 ? args[portFlag + 1] : process.env.FANUI_FIXTURE_PORT ?? 4177);
const fixtureRoot = resolve(fileURLToPath(new URL("../../tests/fixtures/", import.meta.url)));

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", "http://fixture.local");
    const pathname = decodeURIComponent(url.pathname === "/" ? "/pass.html" : url.pathname);
    const candidate = resolve(fixtureRoot, `.${pathname}`);

    if (candidate !== fixtureRoot && !candidate.startsWith(`${fixtureRoot}${sep}`)) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    const file = await stat(candidate);
    if (!file.isFile()) throw new Error("Not a file");

    response.writeHead(200, {
      "cache-control": "no-store",
      "content-type": contentTypes[extname(candidate)] ?? "application/octet-stream",
    });
    createReadStream(candidate).pipe(response);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" }).end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  process.stdout.write(`FanUI fixtures listening at http://127.0.0.1:${port}\n`);
});

const shutdown = () => server.close(() => process.exit(0));
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

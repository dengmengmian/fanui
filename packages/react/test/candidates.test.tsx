import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Button,
  Disclosure,
  PricingCard,
  ResourceCard,
  SearchField,
  SegmentedControl,
} from '../src';

describe('FanUI candidate components', () => {
  it('keeps button semantics and busy state', () => {
    render(<Button busy>保存</Button>);
    expect(screen.getByRole('button', { name: '保存' })).toBeDisabled();
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('labels search and reports changes', () => {
    const onChange = vi.fn();
    render(<SearchField label="搜索 API" value="" onChange={onChange} />);
    fireEvent.change(screen.getByRole('searchbox', { name: '搜索 API' }), { target: { value: 'AI' } });
    expect(onChange).toHaveBeenCalledWith('AI');
  });

  it('selects one segment', () => {
    const onChange = vi.fn();
    render(
      <SegmentedControl
        label="计费周期"
        value="year"
        onChange={onChange}
        options={[{ value: 'month', label: '按月' }, { value: 'year', label: '按年' }]}
      />,
    );
    expect(screen.getByRole('radio', { name: '按年' })).toBeChecked();
    fireEvent.click(screen.getByRole('radio', { name: '按月' }));
    expect(onChange).toHaveBeenCalledWith('month');
  });

  it('uses native disclosure semantics', () => {
    render(<Disclosure summary="为什么使用 FanUI？">保持一致性</Disclosure>);
    expect(screen.getByText('为什么使用 FanUI？').closest('details')).toBeTruthy();
  });

  it('renders resource and pricing content without hiding semantics', () => {
    render(
      <>
        <ResourceCard title="OpenAI API" description="公开 API 文档" metadata="12k 浏览" />
        <PricingCard name="专业版" price="¥234" period="席位 / 年" features={['自动化测试']} />
      </>,
    );
    expect(screen.getByRole('heading', { name: 'OpenAI API' })).toBeVisible();
    expect(screen.getByText('¥234')).toBeVisible();
    expect(screen.getByText('自动化测试')).toBeVisible();
  });
});

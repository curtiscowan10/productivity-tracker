export type TableHeaderType = {
  label: string,
  value: string,
  excludeSort?: boolean,
  align?: 'left' | 'center' | 'right'
};

export const TableHeaders = [
  { label: 'Status', value: 'isCompleted', align: 'left'},
  { label: 'Description', value: 'description', align: 'left'},
  { label: 'Category', value: 'category', align: 'center' },
  { label: 'Priority', value: 'priority', align: 'center'},
  { label: 'Actions', value: 'actions', excludeSort: true, align: 'right' }
];
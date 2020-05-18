export interface ITablePaginationProps {
  postsPerPage: any;
  totalPosts: number;
  paginate: (num: number) => void;
  changePostsPerPage: (num: number) => void;
  currentPage: number;
}

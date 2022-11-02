/* eslint-disable camelcase */
import { PaginationSchemaType } from '../schema/bitrix/PaginationSchema'
import { Pagination } from '~~/domains/page/PageType'

export const EditPagination = ({
  page,
  page_count,
  page_size,
  total_elements,
}: PaginationSchemaType): Pagination => {
  return {
    page,
    pageCount: page_count,
    pageSize: page_size,
    totalElements: total_elements,
  }
}

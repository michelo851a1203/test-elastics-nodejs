import { describe, test } from "vitest";
import { 
  callElasticSearch, 
  searchElastic,
  searchElasticFilter,
  searchElasticPagination,
 } from '.'

describe('main', () => {
  test('test elastic search', async () => {
    const client = callElasticSearch()
    const index = 'objects-carboncredit';
    await searchElastic(index, client);
  })

  test('test elastic filter', async () => {
    const client = callElasticSearch()
    const index = 'objects-carboncredit';
    await searchElasticFilter(index, client);
  })

  test('test elastic pagination', async () => {
    const client = callElasticSearch()
    const index = 'objects-carboncredit';
    await searchElasticPagination(index, client)
  })
})

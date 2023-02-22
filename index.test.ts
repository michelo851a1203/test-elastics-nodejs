import { describe, test } from "vitest";
import { 
  callElasticSearch, 
  searchElastic,
  searchElasticFilter,
  searchElasticPagination,
  fuzzySearchingElastic,
  accurateSearchElastic,
  combineSearchingElastic,
 } from '.'

describe('main', () => {
  // test('test elastic search', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carboncredit';
  //   await searchElastic(index, client);
  // })
  //
  // test('test elastic filter', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carboncredit';
  //   await searchElasticFilter(index, client);
  // })
  //
  // test('test elastic pagination', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carboncredit';
  //   await searchElasticPagination(index, client)
  // })

  // test('test elastic fuzzy search accurate', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carbonproject';
  //   await fuzzySearchingElastic(index, client, 'Srepok 1 Solar Power Project')
  // })
  //
  // test('test elastic fuzzy search prefix', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carbonproject';
  //   await fuzzySearchingElastic(index, client, 'Srepok 1')
  // })
  //
  // test('test elastic fuzzy search middle', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carbonproject';
  //   await fuzzySearchingElastic(index, client, '1 Solar Power')
  // })
  //
  // test('test elastic fuzzy search end', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carbonproject';
  //   await fuzzySearchingElastic(index, client, 'Power Project')
  // })

  // test('test elastic fuzzy search fail', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carbonproject';
  //   await fuzzySearchingElastic(index, client, 'cool')
  // })

  test('test elastic accurate search account success', async () => {
    const client = callElasticSearch()
    const index = 'objects-account';
    await accurateSearchElastic(index, client, 'temp-account')
  })

  // test('test elastic accurate search partial must be fail', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-account';
  //   await accurateSearchElastic(index, client, 'temp')
  // })
  //
  // test('test elastic accurate search only fail', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-account';
  //   await accurateSearchElastic(index, client, 'cool')
  // })

  test('combine search success', async () => {
    const client = callElasticSearch()
    const index = 'objects-carbonproject';
    await combineSearchingElastic(
      index,
      client,
      'Srepok 1 Solar Power Project',
      'verra',
      'Energy industries (renewable/non-renewable sources)',
      'Viet Nam',
    )
  })
})

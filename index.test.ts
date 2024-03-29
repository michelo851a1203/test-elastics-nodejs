import { describe, test } from "vitest";
import { 
  callElasticSearch, 
  searchElastic,
  searchElasticFilter,
  searchElasticPagination,
  fuzzySearchingElastic,
  accurateSearchElastic,
  combineSearchingElastic,
  keySearch,
  dateRangeSearch,
  finMultiple,
  searchCount,
  findAccount,
  findAssetWithQuery,
  findAssetWithQuery_for_carbon_credit,
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

  // test('test elastic accurate search account success', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-account';
  //   await accurateSearchElastic(index, client, 'temp-account')
  // })

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

  // test('combine search success', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carbonproject';
  //   await combineSearchingElastic(
  //     index,
  //     client,
  //     'Srepok 1 Solar Power Project',
  //     'verra',
  //     'Energy industries (renewable/non-renewable sources)',
  //     'Viet Nam',
  //   )
  // })

  // test('test elastic accurate search account success', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-account';
  //   await keySearch(index, client)
  // })

  // test('test date search', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-carboncredit';
  //   await dateRangeSearch(index, client)
  // })

  // test('test search multiple value', async () => {
  //   const client = callElasticSearch()
  //   // const index = 'objects-carbonproject';
  //   const index = 'objects-account';
  //   await finMultiple(index, client)
  // })
  //
  // test('test count', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-account';
  //   await searchCount(index, client)
  // });

  // test('findAccount', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-account';
  //   await findAccount(index, client)
  // });

  test('findAssetWithQuery', async () => {
    const client = callElasticSearch()
    const index = 'objects-asset';
    // const index = 'objects-account';
    await findAssetWithQuery(index, client)
  });

  // test('findAssetWithQuery_for_carbon_credit', async () => {
  //   const client = callElasticSearch()
  //   const index = 'objects-asset';
  //   // const index = 'objects-account';
  //   await findAssetWithQuery_for_carbon_credit(index, client)
  // });

})

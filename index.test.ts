import { describe, test } from "vitest";
import { 
  callElasticSearch, 
  searchElastic,
  createInformation,
 } from '.'

describe('main', () => {
  test('test elastic search', async () => {
    const client = callElasticSearch()
    const index = 'objects-carboncredit';
    // await createInformation(index ,client);
    await searchElastic(index, client);
  })
})

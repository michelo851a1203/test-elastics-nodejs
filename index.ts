import elasticSearch from '@elastic/elasticsearch'

export const callElasticSearch = () => {
  const node = 'https://dex.es.dev.net-zero.eco/';
  // const node = 'http://localhost:9200'
  const client = new elasticSearch.Client({
    node
  });

  return client;
}

export const createInformation = async (index: string,client: elasticSearch.Client) => {
  await client.index({
    index,
    document: {
      character: 'testing',
      quote: 'cool',
    }
  })
}

export const searchElastic = async (index: string,client: elasticSearch.Client) => {
  const result = await client.search({
    index,
  })
  console.log('=====================');
  console.log(result.hits.hits);
  console.log('=====================');
}

export const searchElasticFilter = async (index: string,client: elasticSearch.Client) => {
  const result = await client.search({
    index,
    query: {
      match: {
        quantity_issued: 4000,
      }
    }
  })
  console.log('===== filter ================');
  console.log(result.hits.hits);
  console.log('=====================');
}

export const searchElasticPagination = async (index: string,client: elasticSearch.Client) => {
  const result = await client.search({
    index,
    from: 0,
    size: 1,
  })
  console.log('===== filter ================');
  console.log(result.hits.hits);
  console.log('=====================');
}

import elasticSearch from '@elastic/elasticsearch'

export const callElasticSearch = () => {
  // const node = 'https://dex.dev.net-zero.eco/api/es/';
  const node = 'https://dex.dev.net-zero.eco/api/search';
  // const node = 'http://localhost:9200';
  const client = new elasticSearch.Client({
    node,
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
  console.log(result);
}

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

export const fuzzySearchingElastic = async (index: string,client: elasticSearch.Client, name: string) => {
  const result = await client.search({
    index,
    query: {
      match: {
        name: name.toLowerCase(),
      }
    }
  })
  console.log('===== filter ================');
  console.log(result.hits.hits);
  console.log('=====================');
}

export const accurateSearchElastic = async (index: string,client: elasticSearch.Client, name: string) => {
  const result = await client.search({
    index,
    query: {
      match_phrase: {
        name,
      }
    }
  })
  console.log('===== filter ================');
  console.log(result.hits.hits);
  console.log('=====================');
}

export const combineSearchingElastic = async (
  index: string,
  client: elasticSearch.Client, 
  name: string,
  standard: string,
  project_type: string,
  country: string,
) => {
  const result = await client.search({
    index,
    query: {
      bool: {
        must: [
          { match_phrase: { name } },
          { term: { standard } },
          { match_phrase: { project_type } },
          { match_phrase: { country } },
        ]
      }
    }
  })
  console.log('===== filter ================');
  console.log(result.hits.hits);
  console.log('=====================');
  client.search
}

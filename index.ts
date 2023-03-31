import elasticSearch from '@elastic/elasticsearch'

export const callElasticSearch = () => {
  const node = 'https://es.dev.dex.net-zero.eco';
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

export const keySearch = async (
  index: string,
  client: elasticSearch.Client
) => {
  const result = await client.search({
    index,
    query: {
      bool: {
        must: [
          { match_phrase: { name: 'init0' }},
          { match_phrase: { 'owner.key_auths': 'ECO28gatQ9bhQb9KzHgwQXnkh4sc3mu669d8ECTKw7oxD84i5UEzEr' }},
          { match_phrase: { 'active.key_auths': 'ECO28gatQ9bhQb9KzHgwQXnkh4sc3mu669d8ECTKw7oxD84i5UEzEr' }},
          { match_phrase: { 'options.memo_key': 'ECO28gatQ9bhQb9KzHgwQXnkh4sc3mu669d8ECTKw7oxD84i5UEzEr' }},
        ]
      }
    }
  })
  console.log('===== filter ================');
  // console.log(result.hits.hits);
  result.hits.hits.forEach(item => {
    const jsonResult = JSON.stringify(item, undefined, 2)
    console.log(jsonResult);
  })

  console.log('=====================');
}

export const dateRangeSearch = async (
  index: string,
  client: elasticSearch.Client
) => {
  const currentMap = new Map()
  currentMap.set('gte', '2020-11-01T00:00:00');
  currentMap.set('lte', '2020-11-02T23:59:59');
  console.log('=============')
  console.log(currentMap.size)
  console.log('=============')

  const result = await client.search({
    index,
    query: {
      range: {
        vintage_start: Object.fromEntries(currentMap.entries()),
      }
    },
  })

  console.log('===== filter ================');
  // console.log(result.hits.hits);
  result.hits.hits.forEach(item => {
    const jsonResult = JSON.stringify(item, undefined, 2)
    console.log(jsonResult);
  })

  console.log('=====================');
}

export const finMultiple = async (
  index: string,
  client: elasticSearch.Client
) => {
  const result = await client.search({
    index,
    query: {
      terms: {
        id: [
          '1.2.10',
          '1.2.11',
        ]
      },
    }
  })

  console.log('===== filter ================');
  // console.log(result.hits.hits);
  result.hits.hits.forEach(item => {
    const jsonResult = JSON.stringify(item, undefined, 2)
    console.log(jsonResult);
  })

  console.log('=====================');
}

export const searchCount = async (
  index: string,
  client: elasticSearch.Client, 
) => {
  const { count } = await client.count({
    index
  })
  console.log('===== filter ================');
  console.log(count);
  console.log('=====================');
  client.search
}

export const findAccount = async (
  index: string,
  client: elasticSearch.Client, 
) => {
  const result = await client.search({
    index,
    query: {
      match: {
        name: 'michael-0000'
      }
    }
  })


  console.log('===== filter ================');
  // console.log(result.hits.hits);
  result.hits.hits.forEach(item => {
    const jsonResult = JSON.stringify(item, undefined, 2)
    console.log(jsonResult);
  })

  console.log('=============================');
}
export const findAssetWithQuery = async (
  index: string,
  client: elasticSearch.Client, 
) => {
  const symbolNameList = ['eusd' ];
  const result = await client.search({
    index,
    query: {
      terms: {
        symbol: symbolNameList,
      }
    },
  })


  console.log('===== filter ================');
  // console.log(result.hits.hits);
  result.hits.hits.forEach(item => {
    const jsonResult = JSON.stringify(item, undefined, 2)
    console.log(jsonResult);
  })


  // const mainAsset = result.hits.hits.filter((sourceItem) => {
  //   const source = sourceItem._source;
  //   const symbol = source.symbol as string
  //   return symbolNameList.includes(symbol.toLowerCase())
  // }).map((sourceItem) => {
  //   return sourceItem._source;
  // })
  // console.log(JSON.stringify(mainAsset, undefined, 2));

  console.log('=============================');
}

export const findAssetWithQuery_for_carbon_credit = async (
  index: string,
  client: elasticSearch.Client, 
) => {
  const result = await client.search({
    index,
    query: {
      match: {
        for_carbon_credit: '1.25.0',
      }
    },
  })


  console.log('===== filter ================');
  result.hits.hits.forEach(item => {
    const jsonResult = JSON.stringify(item, undefined, 2)
    console.log(jsonResult);
  })
  
  console.log('=============================');
}


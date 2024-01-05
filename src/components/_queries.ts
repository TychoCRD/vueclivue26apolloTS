import gql from 'graphql-tag'

export interface SearchCityQryResult {
  searchCities: {
    id: string
    name: string
    timezone: string
  }[]
}
export const SEARCH_CITIES_QRY = gql`
  query SearchCities ($searchKey: String) {
    searchCities (searchKey: $searchKey) {
      id
      name
      timezone
    }
  }
`

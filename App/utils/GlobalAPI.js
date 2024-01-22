import { request, gql } from 'graphql-request'

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clraed9g113pg01wa4xp0na3y/master'

const getSlider = async () => {
  const query = gql`
  query MyQuery {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getCategory = async () => {
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getCourseList = async () => {
  const query = gql`
  query MyQuery {
    courses {
      id
      name
      link
      about
      address
      category {
        name
      }
      image {
        url
      }
      time
      vendor
      pricing
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getCourseListByCategory = async (category) => {
  const query = gql`
  query getCourseList {
    courses(where: {category: {name: "`+category+`"}}) {
      id
      name
      link
      about
      address
      category {
        name
      }
      image {
        url
      }
      time
      vendor
      pricing
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

export default {
    getSlider,
    getCategory,
    getCourseList,
    getCourseListByCategory,
}
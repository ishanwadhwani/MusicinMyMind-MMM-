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
    courses(where: {category: {name: "`+ category + `"}}) {
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

const createBooking = async (data) => {
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {
        bookingStatus: Booked, 
        business: {
          connect: {id: "`+data.businessId+`"}},
        date: "`+data.date+`", 
        time: "`+data.time+`", 
        userEmail: "`+data.userEmail+`", 
        userName: "`+data.userName+`", }
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
  }
}
`
  const result = await request(MASTER_URL, mutationQuery)
  return result
}

const getUserBookings = async (userEmail) => {
  const query = gql`
  query GetUserBookings {
    bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
      time
      userEmail
      userName
      bookingStatus
      date
      id
      business {
        id
        image {
          url
        }
        name
        address
        about
        pricing
      }
    }
  }
`
  const result = await request(MASTER_URL, query)
  return result
}

  export default {
    getSlider,
    getCategory,
    getCourseList,
    getCourseListByCategory,
    createBooking,
    getUserBookings,
  }
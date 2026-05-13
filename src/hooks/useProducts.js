import { useQuery } from '@tanstack/react-query'
import { mockProducts, mockCategories } from '../data/mockData'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const useProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      await delay(500) // Simulate network delay
      return mockProducts
    },
    staleTime: 1000 * 60 * 10,
  })

export const useProduct = (id) =>
  useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      await delay(300) // Simulate network delay
      const product = mockProducts.find(p => p.id === id)
      if (!product) throw new Error('Product not found')
      return product
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  })

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      await delay(200) // Simulate network delay
      return mockCategories
    },
    staleTime: 1000 * 60 * 60,
  })

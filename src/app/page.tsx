'use client'
import { getAllRecruiters } from '@/services/home.service'
import { useEffect } from 'react'
import { Content } from './_containers'

export default function Home() {
  useEffect(() => {
    getAllRecruiters()
  }, [])
  return (
    <>
      <div>
        <Content />
      </div>
    </>
  )
}

import Image from 'next/image'
import Button from './components/Button'
import { notFound } from 'next/navigation'

export default function Home() {
  // notfound
  // 1. app/not-fount.tsx 생성
  // 2. 최 상위 경로에서 notFound() 호출
  // notFound();

  return (
    <div>
      <h1>홈페이지</h1>
      <Button />
    </div>
  )
}

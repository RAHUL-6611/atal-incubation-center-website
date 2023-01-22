import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

// landing page
export default function Home() {
  return (
    <div>
      <h1>Main page</h1>
    </div>
  )
}

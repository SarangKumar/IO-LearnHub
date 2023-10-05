import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/2', {
})
  const data = await res.json()
  // return NextResponse.json({name: Sarang})
 
  return NextResponse.json({ data })
}
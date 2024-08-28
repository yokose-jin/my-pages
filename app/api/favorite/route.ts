// app/api/posts/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/app/_lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('my-pages');
    const posts = await db.collection('favorite').find({}).toArray();

    return NextResponse.json(posts);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
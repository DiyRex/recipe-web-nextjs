import { NextResponse } from 'next/server';
import recipes from '../../data/recipes.json';

export async function GET() {
  const randomIndex = Math.floor(Math.random() * recipes.length);
  const randomRecipe = recipes[randomIndex];

  return NextResponse.json(randomRecipe);
}

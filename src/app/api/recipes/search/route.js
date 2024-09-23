import { NextResponse } from 'next/server';
import recipes from '../../data/recipes.json';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(query.toLowerCase()) ||
    recipe.summary.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filteredRecipes);
}

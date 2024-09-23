import { NextResponse } from 'next/server';
import recipes from '../../data/recipes.json';

export async function GET(req, { params }) {
  const { id } = params;
  const recipe = recipes.find(r => r.id === parseInt(id));

  if (recipe) {
    return NextResponse.json(recipe);
  } else {
    return NextResponse.json({ error: 'Recipe not found' }, { status: 404 });
  }
}

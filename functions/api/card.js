export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // GET /api/cards?search=xxx&tags=温柔,校园
  if (url.pathname === '/api/cards' && request.method === 'GET') {
    const search = url.searchParams.get('search') || '';
    const limit = parseInt(url.searchParams.get('limit') || '30');

    let query = `
      SELECT id, name, tags, short_description, download_count 
      FROM cards 
      WHERE status = 'curated'
    `;
    const params = [];

    if (search) {
      query += ` AND (name LIKE ? OR short_description LIKE ?)`;
      params.push(`%${search}%`, `%${search}%`);
    }

    query += ` ORDER BY download_count DESC, created_at DESC LIMIT ?`;
    params.push(limit);

    const { results } = await env.DB.prepare(query).bind(...params).all();

    return Response.json({ success: true, data: results }, { headers: corsHeaders });
  }

  // GET /api/cards/:id （返回完整 card_json + lorebook）
  const match = url.pathname.match(/^\/api\/cards\/(\d+)$/);
  if (match && request.method === 'GET') {
    const id = match[1];
    const { results } = await env.DB
      .prepare(`SELECT card_json, lorebook_json FROM cards WHERE id = ? AND status = 'curated'`)
      .bind(id)
      .all();

    if (!results.length) {
      return Response.json({ success: false, error: 'Card not found' }, { status: 404, headers: corsHeaders });
    }

    const card = JSON.parse(results[0].card_json);
    if (results[0].lorebook_json) {
      card.data.character_book = JSON.parse(results[0].lorebook_json);
    }

    return Response.json({ success: true, data: card }, { headers: corsHeaders });
  }

  return new Response('Not Found', { status: 404, headers: corsHeaders });
}

export async function GET(request) {
  try {
    const cart = {
      items: [],
      total: 0,
      itemCount: 0,
    }

    return Response.json({
      success: true,
      data: cart,
    })
  } catch (error) {
    return Response.json({
      success: false,
      message: 'خطأ في جلب السلة',
    }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { productId, quantity } = body

    return Response.json({
      success: true,
      message: 'تمت إضافة المنتج للسلة',
    })
  } catch (error) {
    return Response.json({
      success: false,
      message: 'خطأ في إضافة المنتج',
    }, { status: 500 })
  }
}
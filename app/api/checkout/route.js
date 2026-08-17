export async function POST(request) {
  try {
    const body = await request.json()
    const { items, totalPrice, userInfo } = body

    return Response.json({
      success: true,
      message: 'تم معالجة الطلب بنجاح',
      orderId: 'ORD-' + Date.now(),
    })
  } catch (error) {
    return Response.json({
      success: false,
      message: 'خطأ في معالجة الطلب',
    }, { status: 500 })
  }
}
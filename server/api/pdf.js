import { Router } from 'express'
import bodyParser from 'body-parser'
import PDFDocument from 'pdfkit'
import moment from 'moment'
import xss from 'xss'
import cookieParser from 'cookie-parser'
const router = Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))
router.use(cookieParser())

router.post('/pdf', (req, res) => {
  const doc = new PDFDocument({ size: 'A4', margin: 50 })
  const client = xss(req.body.client_name)
  const charge = xss(req.body.charge)
  const content = xss(req.body.content)
  const price = xss(req.body.price)
  const bikou = xss(req.body.bikou).replace(/\r?\n/g, '\n')
  const planTotal = Number(price) * 1.08
  const issue = moment(xss(req.body.issue)).format('YYYY年MM月DD日')
  let filename = '領収書-' + client + '様'
  filename = encodeURIComponent(filename) + '.pdf'
  res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
  res.setHeader('Content-type', 'application/pdf')
  doc.font('./static/fonts/meiryo.ttf')
  doc.pipe(res)
  doc.y = 300
  doc.fontSize(10).text(issue, 389, 150, { align: 'right', width: 150 })
  doc.fontSize(18).text('領　収　書', 0, 80, { width: 600, align: 'center' })
  doc.fontSize(10)
  doc.text(charge, 50, 175)
  doc.fontSize(12)
  doc.text('様', 304, 175)
  doc.moveTo(50, 188).lineTo(300, 188).stroke()
  doc.fontSize(10)
  // left block
  doc.fontSize(14).text('領収金額　　　　　' + '￥' + Number(planTotal).toLocaleString() + '-', 0, 220, { width: 600, align: 'center' })
  doc.moveTo(150, 248).lineTo(450, 248).stroke()
  doc.moveDown(1)
  doc.fontSize(10)
  doc.text('但し、', 160, 264).stroke()
  doc.text('として', 402, 264).stroke()
  doc.moveDown(1)
  doc.text(content, 0, 264, { align: 'center', width: 600 }).stroke()
  doc.moveTo(200, 278).lineTo(400, 278).stroke()
  doc.text('上記金額を正に受領いたしました。', 0, 298, { align: 'center', width: 600 })
  // right block
  doc.fontSize(10)
  doc.text('〒000-000', 335, 430, { align: 'left', width: 170 })
  doc.moveDown(0.1)
  doc.text('東京都○○区')
  doc.moveDown(0.1)
  doc.text('TEL:00-0000-0000')
  doc.moveDown(0.5)
  doc.fontSize(12)
  doc.text('株式会社○○')
  doc.moveTo(75, 430).lineTo(150, 430).dash(1, { space: 1 }).stroke()
  doc.moveTo(75, 430).lineTo(75, 505).stroke()
  doc.moveTo(150, 430).lineTo(150, 505).stroke()
  doc.moveTo(75, 505).lineTo(150, 505).stroke()
  doc.fontSize(15)
  doc.text('印紙', 75, 458, { align: 'center', width: 75 })
  doc.fontSize(10)
  doc.text('備考', 50, 564).stroke()
  doc.moveDown(0.1)
  doc.moveTo(50, 580).lineTo(540, 580).dash(0, { space: 0 }).stroke()
  doc.moveTo(50, 580).lineTo(50, 700).stroke()
  doc.moveTo(540, 580).lineTo(540, 700).stroke()
  doc.moveTo(50, 700).lineTo(540, 700).stroke()
  doc.text(bikou, 60, 590).stroke()
  doc.fontSize(15)
  doc.fillColor('black')
  doc.end()
})

export default router

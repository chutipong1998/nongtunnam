// class Procurement {
//     constructor(id, projectName, fiscalYear, procurementMethod , procurementId,
//         budget, middlePrice, bidWinner, originMedianPrice, bid, reasonBeingChosen, effectiveDate ) {
//             this.id = id;
//             this.projectName = projectName;              //ชื่อโครงการ
//             this.fiscalYear = fiscalYear;                //ปีงบประมาณ พ.ศ.
//             this.procurementMethod = procurementMethod;  //วิธีการจัดหา
//             this.procurementId = procurementId;          //เลขที่โครงการ
//             this.budget = budget;                        //งบประมาณ
//             this.middlePrice = middlePrice;              //ราคากลาง
//             this.bidWinner = bidWinner;                  //ผู้ชนะการเสนอราคา
//             this.originMedianPrice = originMedianPrice;  //ที่มาของราคากลาง
//             this.bid = bid;                              //ราคาเสนอ
//             this.reasonBeingChosen = reasonBeingChosen;  //เหตุผลที่ได้รับคัดเลือก
//             this.effectiveDate = effectiveDate;          //วันที่ประกาศ
//             this.document = new Array(Document());       //เอกสาร
//     }
// }

// class Document {
//     constructor(id, url ) {
//         this.id = id;
//         this.url = url
//     }
// }

// module.exports = Procurement;


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const procurementSchema = new Schema({
    _id: String,
    projectName: String,
    fiscalYear: Date,
    description: { type: String, required: false },
    image: { type: String, required: false },
    available: { type: Boolean, required: true, default: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  });
  
  module.exports = mongoose.model('Procurement', procurementSchema);
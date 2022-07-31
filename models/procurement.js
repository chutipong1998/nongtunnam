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
    projectName: String,
    procurementId: String,
    fiscalYear: Date,
    procurementMethod: String,
    budget: Number,
    middlePrice: Number,
    originMedianPrice: String,
    bidWinner: String,
    bid: Number,
    reasonBeingChosen: String,
    effectiveDate: Date,
    document: [String]
  },{
    versionKey: false // set to false then it wont create in mongodb
  });
  
  module.exports = mongoose.model('Procurement', procurementSchema);
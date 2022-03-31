var data = [{
    "name": "Approval",
    "package": "com.dr.oursp.retail.squaring",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "org.apache.logging.log4j.util.Strings"],
    "class_name": "Approval extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/Approval.java"
}, {
    "name": "ApprovalData",
    "package": "com.dr.oursp.retail.squaring.behavior",
    "type": "class",
    "imports": ["lombok.Builder", "lombok.Data"],
    "class_name": "ApprovalData",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/behavior/ApprovalData.java"
}, {
    "name": "SquaringUpBehavior",
    "package": "com.dr.oursp.retail.squaring.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.support.AccurateNumber", "java.util.List"],
    "class_name": "SquaringUpBehavior",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/behavior/SquaringUpBehavior.java"
}, {
    "name": "DataNexus",
    "package": "com.dr.oursp.retail.squaring.behavior",
    "type": "class",
    "imports": ["lombok.Builder", "lombok.Data"],
    "class_name": "DataNexus",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/behavior/DataNexus.java"
}, {
    "name": "SquaringUpWaybill",
    "package": "com.dr.oursp.retail.squaring.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.waybill.domain.Creator", "com.dr.oursp.retail.squaring.waybill.domain.SelectorAny", "com.dr.oursp.retail.squaring.waybill.domain.SelectorSingle", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillRepository", "com.dr.oursp.strategy.setting.PlatformSetting"],
    "class_name": "SquaringUpWaybill",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/SquaringUpWaybill.java"
}, {
    "name": "SquaringUpWaybillVo",
    "package": "com.dr.oursp.retail.squaring.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillEntity", "com.dr.oursp.retail.squaring.waybill.repository.WaybillDetail", "lombok.Builder", "lombok.Data", "java.util.List"],
    "class_name": "SquaringUpWaybillVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/SquaringUpWaybillVo.java"
}, {
    "name": "SquaringUpWaybillBehavior",
    "package": "com.dr.oursp.retail.squaring.waybill.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.squaring.behavior.SquaringUpBehavior"],
    "class_name": "SquaringUpWaybillBehavior extends SquaringUpBehavior",
    "extend_name": "SquaringUpBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/behavior/SquaringUpWaybillBehavior.java"
}, {
    "name": "InternalSquaringUpWaybillBehavior",
    "package": "com.dr.oursp.retail.squaring.waybill.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.squaring.Approval", "com.dr.oursp.retail.squaring.behavior.ApprovalData", "com.dr.oursp.retail.squaring.behavior.DataNexus", "com.dr.oursp.retail.squaring.waybill.consts.SquaringUpWaybillState", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillEntity", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillRepository", "com.dr.oursp.retail.squaring.waybill.repository.WaybillDetail", "com.dr.oursp.retail.support.AccurateNumber", "org.springframework.util.Assert", "java.time.Instant", "java.util.List", "java.util.function.Consumer", "java.util.function.Supplier"],
    "class_name": "InternalSquaringUpWaybillBehavior implements SquaringUpWaybillBehavior",
    "extend_name": "",
    "implements_name": ["SquaringUpWaybillBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/behavior/InternalSquaringUpWaybillBehavior.java"
}, {
    "name": "SquaringUpWaybillRepository",
    "package": "com.dr.oursp.retail.squaring.waybill.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "SquaringUpWaybillRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/repository/SquaringUpWaybillRepository.java"
}, {
    "name": "WaybillDetail",
    "package": "com.dr.oursp.retail.squaring.waybill.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.Approval", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "java.math.BigDecimal", "java.util.Map", "java.util.Set"],
    "class_name": "WaybillDetail extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/repository/WaybillDetail.java"
}, {
    "name": "SquaringUpWaybillEntity",
    "package": "com.dr.oursp.retail.squaring.waybill.repository",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.util.List"],
    "class_name": "SquaringUpWaybillEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/repository/SquaringUpWaybillEntity.java"
}, {
    "name": "SelectorAny",
    "package": "com.dr.oursp.retail.squaring.waybill.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillEntity", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillRepository", "java.util.Comparator", "java.util.stream.Stream"],
    "class_name": "SelectorAny extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/domain/SelectorAny.java"
}, {
    "name": "SelectorSingle",
    "package": "com.dr.oursp.retail.squaring.waybill.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.squaring.waybill.behavior.InternalSquaringUpWaybillBehavior", "com.dr.oursp.retail.squaring.waybill.behavior.SquaringUpWaybillBehavior", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillEntity", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillRepository"],
    "class_name": "SelectorSingle extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/domain/SelectorSingle.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.squaring.waybill.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.squaring.Approval", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.squaring.waybill.consts.SquaringUpWaybillState", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillEntity", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillRepository", "com.dr.oursp.retail.squaring.waybill.repository.WaybillDetail", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.setting.PlatformSetting", "com.google.common.collect.Sets", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.Map"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/domain/Creator.java"
}, {
    "name": "SquaringUpWaybillState",
    "package": "com.dr.oursp.retail.squaring.waybill.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "SquaringUpWaybillState implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/consts/SquaringUpWaybillState.java"
}, {
    "name": "SquaringUpWaybillPassEnum",
    "package": "com.dr.oursp.retail.squaring.waybill.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "SquaringUpWaybillPassEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/waybill/consts/SquaringUpWaybillPassEnum.java"
}, {
    "name": "SquaringUpGoodsVo",
    "package": "com.dr.oursp.retail.squaring.goods",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.goods.repository.GoodsDetail", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsEntity", "com.dr.oursp.retail.support.AccurateNumber", "lombok.Builder", "lombok.Data", "org.springframework.data.annotation.Id", "java.util.List"],
    "class_name": "SquaringUpGoodsVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/SquaringUpGoodsVo.java"
}, {
    "name": "SquaringUpGoods",
    "package": "com.dr.oursp.retail.squaring.goods",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.goods.domain.Creator", "com.dr.oursp.retail.squaring.goods.domain.SelectorAny", "com.dr.oursp.retail.squaring.goods.domain.SelectorSingle", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsRepository", "com.dr.oursp.strategy.setting.PlatformSetting"],
    "class_name": "SquaringUpGoods",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/SquaringUpGoods.java"
}, {
    "name": "SquaringUpGoodsBehavior",
    "package": "com.dr.oursp.retail.squaring.goods.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.squaring.behavior.ApprovalData", "com.dr.oursp.retail.squaring.behavior.SquaringUpBehavior"],
    "class_name": "SquaringUpGoodsBehavior extends SquaringUpBehavior",
    "extend_name": "SquaringUpBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/behavior/SquaringUpGoodsBehavior.java"
}, {
    "name": "InternalSquaringUpGoodsBehavior",
    "package": "com.dr.oursp.retail.squaring.goods.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.squaring.Approval", "com.dr.oursp.retail.squaring.behavior.ApprovalData", "com.dr.oursp.retail.squaring.behavior.DataNexus", "com.dr.oursp.retail.squaring.goods.consts.SquaringUpGoodsState", "com.dr.oursp.retail.squaring.goods.repository.GoodsDetail", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsEntity", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsRepository", "com.dr.oursp.retail.squaring.waybill.repository.WaybillDetail", "com.dr.oursp.retail.support.AccurateNumber", "org.springframework.util.Assert", "java.time.Instant", "java.util.List", "java.util.function.Consumer", "java.util.function.Supplier"],
    "class_name": "InternalSquaringUpGoodsBehavior implements SquaringUpGoodsBehavior",
    "extend_name": "",
    "implements_name": ["SquaringUpGoodsBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/behavior/InternalSquaringUpGoodsBehavior.java"
}, {
    "name": "SquaringUpGoodsEntity",
    "package": "com.dr.oursp.retail.squaring.goods.repository",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.math.BigDecimal", "java.util.List"],
    "class_name": "SquaringUpGoodsEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/repository/SquaringUpGoodsEntity.java"
}, {
    "name": "GoodsDetail",
    "package": "com.dr.oursp.retail.squaring.goods.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.Approval", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "java.math.BigDecimal", "java.util.Map", "java.util.Set"],
    "class_name": "GoodsDetail extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/repository/GoodsDetail.java"
}, {
    "name": "SquaringUpGoodsRepository",
    "package": "com.dr.oursp.retail.squaring.goods.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "SquaringUpGoodsRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/repository/SquaringUpGoodsRepository.java"
}, {
    "name": "SelectorAny",
    "package": "com.dr.oursp.retail.squaring.goods.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.squaring.goods.SquaringUpGoodsVo", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsEntity", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsRepository", "java.util.Comparator", "java.util.stream.Stream"],
    "class_name": "SelectorAny extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/domain/SelectorAny.java"
}, {
    "name": "SelectorSingle",
    "package": "com.dr.oursp.retail.squaring.goods.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.squaring.goods.SquaringUpGoodsVo", "com.dr.oursp.retail.squaring.goods.behavior.InternalSquaringUpGoodsBehavior", "com.dr.oursp.retail.squaring.goods.behavior.SquaringUpGoodsBehavior", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsEntity", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsRepository"],
    "class_name": "SelectorSingle extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/domain/SelectorSingle.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.squaring.goods.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.squaring.Approval", "com.dr.oursp.retail.squaring.goods.SquaringUpGoodsVo", "com.dr.oursp.retail.squaring.goods.consts.SquaringUpGoodsState", "com.dr.oursp.retail.squaring.goods.repository.GoodsDetail", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsEntity", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsRepository", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.setting.PlatformSetting", "com.google.common.collect.Sets", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal", "java.util.Map"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/domain/Creator.java"
}, {
    "name": "SquaringUpGoodsState",
    "package": "com.dr.oursp.retail.squaring.goods.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "SquaringUpGoodsState implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/consts/SquaringUpGoodsState.java"
}, {
    "name": "SquaringUpGoodsPassEnum",
    "package": "com.dr.oursp.retail.squaring.goods.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "SquaringUpGoodsPassEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/goods/consts/SquaringUpGoodsPassEnum.java"
}, {
    "name": "SquaringUpManager",
    "package": "com.dr.oursp.retail.squaring.remote",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.remote.exception.SquaringException", "com.dr.oursp.retail.squaring.remote.exception.SquaringRequestException", "com.dr.oursp.retail.squaring.remote.exception.SquaringServerException", "com.dr.oursp.retail.squaring.remote.request.*", "com.dr.oursp.retail.squaring.remote.response.ProcessingResultResponse", "feign.FeignException", "feign.RetryableException", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.util.CollectionUtils", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.List", "java.util.Map", "java.util.Objects", "java.util.function.Supplier"],
    "class_name": "SquaringUpManager",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/SquaringUpManager.java"
}, {
    "name": "Squaring",
    "package": "com.dr.oursp.retail.squaring.remote",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.squaring.remote.request.*", "com.dr.oursp.retail.squaring.remote.response.BillResponse", "com.dr.oursp.retail.squaring.remote.response.OriginalDataResponse", "com.dr.oursp.retail.squaring.remote.response.ProcessingResultResponse", "com.dr.oursp.retail.squaring.remote.response.SquaringResponse", "org.springframework.cloud.openfeign.FeignClient", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "java.util.List"],
    "class_name": "Squaring up feign client.",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/SquaringUpFeignClient.java"
}, {
    "name": "ProcessingResultResponse",
    "package": "com.dr.oursp.retail.squaring.remote.response",
    "type": "class",
    "imports": ["lombok.Data", "org.springframework.data.annotation.Id", "org.springframework.data.annotation.Version", "java.util.Map"],
    "class_name": "ProcessingResultResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/response/ProcessingResultResponse.java"
}, {
    "name": "OriginalDataResponse",
    "package": "com.dr.oursp.retail.squaring.remote.response",
    "type": "class",
    "imports": ["lombok.Data", "org.springframework.data.annotation.Id", "org.springframework.data.annotation.Version", "java.util.Map"],
    "class_name": "OriginalDataResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/response/OriginalDataResponse.java"
}, {
    "name": "BillResponse",
    "package": "com.dr.oursp.retail.squaring.remote.response",
    "type": "class",
    "imports": ["lombok.Data", "org.springframework.data.annotation.Id", "org.springframework.data.annotation.Version", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "BillResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/response/BillResponse.java"
}, {
    "name": "SquaringResponse",
    "package": "com.dr.oursp.retail.squaring.remote.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.squaring.remote.exception.SquaringException", "com.dr.oursp.retail.squaring.remote.exception.SquaringResponseException", "com.dr.oursp.retail.squaring.remote.exception.SquaringServerException", "io.swagger.annotations.ApiModelProperty", "lombok.AccessLevel", "lombok.Getter", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "java.io.Serializable"],
    "class_name": "SquaringResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/response/SquaringResponse.java"
}, {
    "name": "NewDataRequest",
    "package": "com.dr.oursp.retail.squaring.remote.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.Map"],
    "class_name": "NewDataRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/request/NewDataRequest.java"
}, {
    "name": "BillAddOriginalRequest",
    "package": "com.dr.oursp.retail.squaring.remote.request",
    "type": "class",
    "imports": ["lombok.Data", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.List"],
    "class_name": "BillAddOriginalRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/request/BillAddOriginalRequest.java"
}, {
    "name": "ProcessRequest",
    "package": "com.dr.oursp.retail.squaring.remote.request",
    "type": "class",
    "imports": ["com.google.common.collect.Maps", "lombok.Data", "javax.validation.constraints.NotBlank", "java.util.List", "java.util.Map"],
    "class_name": "ProcessRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/request/ProcessRequest.java"
}, {
    "name": "NewProcessingRequest",
    "package": "com.dr.oursp.retail.squaring.remote.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "NewProcessingRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/request/NewProcessingRequest.java"
}, {
    "name": "BillRecordReportRequest",
    "package": "com.dr.oursp.retail.squaring.remote.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiParam", "lombok.Data", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.Map"],
    "class_name": "BillRecordReportRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/request/BillRecordReportRequest.java"
}, {
    "name": "SquaringException",
    "package": "com.dr.oursp.retail.squaring.remote.exception",
    "type": "class",
    "imports": [],
    "class_name": "SquaringException extends Exception",
    "extend_name": "Exception",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/exception/SquaringException.java"
}, {
    "name": "SquaringResponseException",
    "package": "com.dr.oursp.retail.squaring.remote.exception",
    "type": "class",
    "imports": [],
    "class_name": "SquaringResponseException extends SquaringException",
    "extend_name": "SquaringException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/exception/SquaringResponseException.java"
}, {
    "name": "SquaringRequestException",
    "package": "com.dr.oursp.retail.squaring.remote.exception",
    "type": "class",
    "imports": [],
    "class_name": "SquaringRequestException extends SquaringException",
    "extend_name": "SquaringException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/exception/SquaringRequestException.java"
}, {
    "name": "SquaringServerException",
    "package": "com.dr.oursp.retail.squaring.remote.exception",
    "type": "class",
    "imports": [],
    "class_name": "SquaringServerException extends SquaringException",
    "extend_name": "SquaringException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/squaring/remote/exception/SquaringServerException.java"
}, {
    "name": "SellingApp",
    "package": "com.dr.oursp.retail.app",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.infra.account.service.AccountInfoService", "com.dr.oursp.retail.app.service.*", "com.dr.oursp.retail.app.service.order.CommodityTradeOrderService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.app.service.param.CommodityCommonModifyParam", "com.dr.oursp.retail.app.service.param.TradeConfirmBidParam", "com.dr.oursp.retail.app.service.param.TradeRejectBidParam", "com.dr.oursp.retail.app.service.squaring.SquaringUpGoodsService", "com.dr.oursp.retail.app.service.squaring.SquaringUpWaybillService", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.consts.CommodityOrderStateEnum", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.TradeItemFactory", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.retry.annotation.Retryable", "org.springframework.stereotype.Service", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.EnumSet", "java.util.List", "java.util.Optional", "java.util.Set", "java.util.function.BiPredicate"],
    "class_name": "SellingApp extends AbstractRetailApp",
    "extend_name": "AbstractRetailApp",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/SellingApp.java"
}, {
    "name": "SupplyingApp",
    "package": "com.dr.oursp.retail.app",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.infra.account.service.AccountInfoService", "com.dr.oursp.retail.app.service.*", "com.dr.oursp.retail.app.service.order.CommodityTradeOrderService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.app.service.param.LogisticsAddressCommonModifyParam", "com.dr.oursp.retail.app.service.param.SupplyCommonModifyParam", "com.dr.oursp.retail.app.service.squaring.SquaringUpGoodsService", "com.dr.oursp.retail.app.service.squaring.SquaringUpWaybillService", "com.dr.oursp.retail.category.consts.OptionsStateEnum", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.retry.annotation.Retryable", "org.springframework.stereotype.Service", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.EnumSet", "java.util.List", "java.util.Optional", "java.util.Set"],
    "class_name": "SupplyingApp extends AbstractRetailApp",
    "extend_name": "AbstractRetailApp",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/SupplyingApp.java"
}, {
    "name": "AbstractRetailApp",
    "package": "com.dr.oursp.retail.app",
    "type": "abstract class",
    "imports": ["com.dr.oursp.infra.account.service.AccountInfoService", "com.dr.oursp.retail.app.service.*", "com.dr.oursp.retail.app.service.order.CommodityTradeOrderService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.app.service.squaring.SquaringUpGoodsService", "com.dr.oursp.retail.app.service.squaring.SquaringUpWaybillService", "com.dr.oursp.retail.globe.config.web.RetailCurrentUser", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.strategy.basic.token.Current", "lombok.AccessLevel", "lombok.Getter"],
    "class_name": "AbstractRetailApp",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/AbstractRetailApp.java"
}, {
    "name": "PurchasingApp",
    "package": "com.dr.oursp.retail.app",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.infra.account.service.AccountInfoService", "com.dr.oursp.retail.app.service.*", "com.dr.oursp.retail.app.service.except.CommodityBidMarginException", "com.dr.oursp.retail.app.service.order.CommodityTradeOrderService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.app.service.param.LogisticsAddressCommonModifyParam", "com.dr.oursp.retail.app.service.param.TradeConfirmBidParam", "com.dr.oursp.retail.app.service.param.TradeRejectBidParam", "com.dr.oursp.retail.app.service.squaring.SquaringUpGoodsService", "com.dr.oursp.retail.app.service.squaring.SquaringUpWaybillService", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.consts.CommodityOrderStateEnum", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.consts.TradeRuleVo", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.consts.DockingPlatformEnum", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.squaring.goods.SquaringUpGoodsVo", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "org.springframework.util.Assert", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.*", "java.util.function.BiPredicate", "java.util.function.Predicate", "java.util.stream.Collectors"],
    "class_name": "PurchasingApp extends AbstractRetailApp",
    "extend_name": "AbstractRetailApp",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/PurchasingApp.java"
}, {
    "name": "ConveyingApp",
    "package": "com.dr.oursp.retail.app",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.infra.account.service.AccountInfoService", "com.dr.oursp.retail.app.service.*", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallLogicStateEnum", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallTradeBidLogicStateEnum", "com.dr.oursp.retail.app.service.order.CommodityTradeOrderService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.app.service.param.CarWaybillModifyParam", "com.dr.oursp.retail.app.service.param.CreateCarParam", "com.dr.oursp.retail.app.service.param.ModifyCarParam", "com.dr.oursp.retail.app.service.squaring.SquaringUpGoodsService", "com.dr.oursp.retail.app.service.squaring.SquaringUpWaybillService", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.consts.CarAvailableEnum", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.consts.CarrierSignedStateEnum", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteAffiliationEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.support.enums.KeyValueEnum", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Lists", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.io.IOException", "java.util.*", "java.util.stream.Collectors"],
    "class_name": "ConveyingApp extends AbstractRetailApp",
    "extend_name": "AbstractRetailApp",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/ConveyingApp.java"
}, {
    "name": "SellingApi",
    "package": "com.dr.oursp.retail.app.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.SellingApp", "com.dr.oursp.retail.app.api.http.PurchasingModelConvert", "com.dr.oursp.retail.app.api.http.request.*", "com.dr.oursp.retail.app.api.http.response.TradeBidHistoryResponse", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.common.collect.Sets", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.util.Assert", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.*", "java.util.function.Function", "java.util.stream.Collectors"],
    "class_name": "SellingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/SellingApi.java"
}, {
    "name": "SupplyingApi",
    "package": "com.dr.oursp.retail.app.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.SupplyingApp", "com.dr.oursp.retail.app.api.http.request.*", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.common.collect.Sets", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.util.Assert", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.EnumSet", "java.util.List", "java.util.Objects", "java.util.Set", "java.util.function.Function", "java.util.stream.Collectors"],
    "class_name": "SupplyingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/SupplyingApi.java"
}, {
    "name": "PurchasingApi",
    "package": "com.dr.oursp.retail.app.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.PurchasingApp", "com.dr.oursp.retail.app.api.http.PurchasingModelConvert", "com.dr.oursp.retail.app.api.http.request.*", "com.dr.oursp.retail.app.api.http.response.TradeBidHistoryResponse", "com.dr.oursp.retail.app.api.http.response.TradeCapitalAccountResponse", "com.dr.oursp.retail.app.service.CarService", "com.dr.oursp.retail.app.service.except.CommodityBidMarginException", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.enums.Enumerations", "com.dr.support.serialization.Serializations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.common.collect.Sets", "io.swagger.annotations.*", "lombok.SneakyThrows", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.time.Instant", "java.util.EnumSet", "java.util.List", "java.util.Objects", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "PurchasingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/PurchasingApi.java"
}, {
    "name": "ConveyingApi",
    "package": "com.dr.oursp.retail.app.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.ConveyingApp", "com.dr.oursp.retail.app.api.http.ConveyingModelConvert", "com.dr.oursp.retail.app.api.http.PurchasingModelConvert", "com.dr.oursp.retail.app.api.http.request.*", "com.dr.oursp.retail.app.api.http.response.CarLocationResponse", "com.dr.oursp.retail.app.api.http.response.TradeCapitalAccountResponse", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallLogicStateEnum", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.consts.CarAvailableEnum", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.consts.CarrierSignedStateEnum", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteAffiliationEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.gson.Gson", "io.swagger.annotations.Api", "io.swagger.annotations.ApiOperation", "io.swagger.annotations.ApiParam", "lombok.extern.slf4j.Slf4j", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.io.IOException", "java.time.Instant", "java.util.List", "java.util.Map", "java.util.Objects", "java.util.stream.Collectors"],
    "class_name": "ConveyingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ConveyingApi.java"
}, {
    "name": "BasicApi",
    "package": "com.dr.oursp.retail.app.api",
    "type": "class",
    "imports": [],
    "class_name": "BasicApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/BasicApi.java"
}, {
    "name": "CategoryOptionApi",
    "package": "com.dr.oursp.retail.app.api.admin",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.ApiUrlConst", "com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.retail.app.api.http.CategoryConvert", "com.dr.oursp.retail.app.api.http.consts.OptionsActionEnum", "com.dr.oursp.retail.app.api.http.request.CategoryOptionParamModifyRequest", "com.dr.oursp.retail.app.api.http.request.CategoryOptionSaveRequest", "com.dr.oursp.retail.app.api.http.response.CategoryDetailResponse", "com.dr.oursp.retail.app.api.http.response.CategoryOptionContentResponse", "com.dr.oursp.retail.app.api.http.response.CategoryOptionDetailResponse", "com.dr.oursp.retail.app.api.http.response.CategoryOptionListResponse", "com.dr.oursp.retail.app.service.CategoryService", "com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.omg.CORBA.Object", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.List", "java.util.Objects", "java.util.stream.Collectors"],
    "class_name": "CategoryOptionApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/admin/CategoryOptionApi.java"
}, {
    "name": "CategoryApi",
    "package": "com.dr.oursp.retail.app.api.admin",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.ApiUrlConst", "com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.retail.app.api.http.CategoryConvert", "com.dr.oursp.retail.app.api.http.consts.CategoryActionEnum", "com.dr.oursp.retail.app.api.http.request.CategoryDefineParamModifyRequest", "com.dr.oursp.retail.app.api.http.request.CategorySaveRequest", "com.dr.oursp.retail.app.api.http.response.CategoryDetailResponse", "com.dr.oursp.retail.app.api.http.response.CategoryListResponse", "com.dr.oursp.retail.app.api.http.response.CategoryPathResponse", "com.dr.oursp.retail.app.service.CategoryService", "com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.omg.CORBA.Object", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "java.util.List", "java.util.Objects", "java.util.stream.Collectors"],
    "class_name": "CategoryApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/admin/CategoryApi.java"
}, {
    "name": "PlayerApi",
    "package": "com.dr.oursp.retail.app.api.admin",
    "type": "class",
    "imports": ["com.dr.oursp.globe.config.OSSConfig", "com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.globe.http.ApiUrlConst", "com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.infra.account.service.AccountService", "com.dr.oursp.infra.org.api.OpOrgModelConvert", "com.dr.oursp.infra.org.api.http.response.OrgInfoDetail", "com.dr.oursp.retail.app.api.http.request.player.PlayerSaveRequest", "com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.reference.caller.pay.exception.DrPayCenterFeignException", "com.dr.oursp.retail.player.vo.RetailPlayerDetailVO", "com.dr.oursp.retail.player.vo.RetailPlayerPropDefinition", "com.dr.oursp.retail.player.vo.RetailPlayerProps", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.entity.IdentityEntity", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.oursp.third.pay.repo.PayCenterSubjectEntity", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.*", "lombok.Data", "lombok.extern.slf4j.Slf4j", "org.omg.CORBA.Object", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.util.Assert", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.List", "java.util.Optional", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "PlayerApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/admin/PlayerApi.java"
}, {
    "name": "PurchasingModelConvert",
    "package": "com.dr.oursp.retail.app.api.http",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.api.http.response.TradeBidHistoryResponse", "com.dr.oursp.retail.app.api.http.response.TradeCapitalAccountResponse", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo"],
    "class_name": "PurchasingModelConvert",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/PurchasingModelConvert.java"
}, {
    "name": "ConveyingModelConvert",
    "package": "com.dr.oursp.retail.app.api.http",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.api.http.request.CarrierSaveRequest", "com.dr.oursp.retail.app.api.http.request.CarrierUpdateRequest", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO"],
    "class_name": "ConveyingModelConvert",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/ConveyingModelConvert.java"
}, {
    "name": "CategoryConvert",
    "package": "com.dr.oursp.retail.app.api.http",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.api.http.request.CategoryDefineParamSaveRequest", "com.dr.oursp.retail.app.api.http.request.CategoryOptionParamSaveRequest", "com.dr.oursp.retail.app.api.http.response.*", "com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.category.domain.CategoryVO", "com.dr.oursp.retail.category.entity.CategoryDefineParam", "com.dr.oursp.retail.category.entity.CategoryOptionParam", "com.dr.support.enums.Enumerations", "java.util.LinkedHashSet", "java.util.stream.Collectors"],
    "class_name": "CategoryConvert",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/CategoryConvert.java"
}, {
    "name": "CategoryListResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "CategoryListResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryListResponse.java"
}, {
    "name": "TradeBidHistoryResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.trade.consts.BidStateEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.SuperBuilder"],
    "class_name": "TradeBidHistoryResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/TradeBidHistoryResponse.java"
}, {
    "name": "CategoryOptionListResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "java.util.List"],
    "class_name": "CategoryOptionListResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryOptionListResponse.java"
}, {
    "name": "CarLocationResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data"],
    "class_name": "CarLocationResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CarLocationResponse.java"
}, {
    "name": "CategoryOptionParamResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.apache.commons.lang3.builder.EqualsBuilder", "org.apache.commons.lang3.builder.HashCodeBuilder", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryOptionParamResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryOptionParamResponse.java"
}, {
    "name": "CategoryOptionContentResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "CategoryOptionContentResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryOptionContentResponse.java"
}, {
    "name": "TradeCapitalAccountResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.CapitalAccountStateEnum", "com.dr.oursp.retail.support.EnumWrapper", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "java.math.BigDecimal"],
    "class_name": "TradeCapitalAccountResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/TradeCapitalAccountResponse.java"
}, {
    "name": "CategoryDetailResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "java.util.LinkedHashSet"],
    "class_name": "CategoryDetailResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryDetailResponse.java"
}, {
    "name": "CategoryPathResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "CategoryPathResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryPathResponse.java"
}, {
    "name": "CategoryOptionDetailResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "java.util.List"],
    "class_name": "CategoryOptionDetailResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryOptionDetailResponse.java"
}, {
    "name": "CategoryDefineParamResponse",
    "package": "com.dr.oursp.retail.app.api.http.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.apache.commons.lang3.builder.EqualsBuilder", "org.apache.commons.lang3.builder.HashCodeBuilder", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryDefineParamResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/response/CategoryDefineParamResponse.java"
}, {
    "name": "PlanWaybillModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.util.Set"],
    "class_name": "PlanWaybillModifyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/PlanWaybillModifyRequest.java"
}, {
    "name": "TradeOrderRemarkRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "TradeOrderRemarkRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/TradeOrderRemarkRequest.java"
}, {
    "name": "ExecuteWaybillLoadingRegistrationRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "ExecuteWaybillLoadingRegistrationRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillLoadingRegistrationRequest.java"
}, {
    "name": "TradeBidConfirmRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Getter", "lombok.Setter", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.List"],
    "class_name": "TradeBidConfirmRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/TradeBidConfirmRequest.java"
}, {
    "name": "CategoryDefineParamModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "org.apache.commons.lang3.builder.EqualsBuilder", "org.apache.commons.lang3.builder.HashCodeBuilder", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryDefineParamModifyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CategoryDefineParamModifyRequest.java"
}, {
    "name": "SupplyModifyTradeRuleRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size"],
    "class_name": "SupplyModifyTradeRuleRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/SupplyModifyTradeRuleRequest.java"
}, {
    "name": "TradeConfirmBidRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.TradeConfirmBidParam", "com.dr.oursp.retail.support.AccurateNumber", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "TradeConfirmBidRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/TradeConfirmBidRequest.java"
}, {
    "name": "LogisticsExecutePlanCreateRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Positive", "java.util.Set"],
    "class_name": "LogisticsExecutePlanCreateRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/LogisticsExecutePlanCreateRequest.java"
}, {
    "name": "CategoryOptionSaveRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "java.util.List"],
    "class_name": "CategoryOptionSaveRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CategoryOptionSaveRequest.java"
}, {
    "name": "ExecuteWaybillPageRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.support.enums.Enumerations", "com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "java.util.Objects"],
    "class_name": "ExecuteWaybillPageRequest extends PageRequest",
    "extend_name": "PageRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillPageRequest.java"
}, {
    "name": "PlanWaybillPageRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiParam", "lombok.Data", "javax.validation.Valid", "java.util.Objects"],
    "class_name": "PlanWaybillPageRequest extends PageRequest",
    "extend_name": "PageRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/PlanWaybillPageRequest.java"
}, {
    "name": "CarTrackRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "CarTrackRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CarTrackRequest.java"
}, {
    "name": "TradeBidMarginRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "TradeBidMarginRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/TradeBidMarginRequest.java"
}, {
    "name": "QueryWaybillRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallLogicStateEnum", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallTradeBidLogicStateEnum", "com.dr.oursp.retail.support.RangeNumber", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiParam", "lombok.Data", "org.springframework.util.CollectionUtils", "java.util.EnumSet", "java.util.List", "java.util.Objects", "java.util.stream.Collectors"],
    "class_name": "QueryWaybillRequest extends PageRequest",
    "extend_name": "PageRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/QueryWaybillRequest.java"
}, {
    "name": "WaybillRemarkRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "WaybillRemarkRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/WaybillRemarkRequest.java"
}, {
    "name": "WaybillOrderPageRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.PageRequest", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.Valid", "javax.validation.constraints.NotBlank"],
    "class_name": "WaybillOrderPageRequest extends PageRequest",
    "extend_name": "PageRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/WaybillOrderPageRequest.java"
}, {
    "name": "LogisticsExecutePlanModifySomeParametersRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive"],
    "class_name": "LogisticsExecutePlanModifySomeParametersRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/LogisticsExecutePlanModifySomeParametersRequest.java"
}, {
    "name": "ExecuteWaybillModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "ExecuteWaybillModifyRequest extends ExecuteWaybillDispatchOrderRequest",
    "extend_name": "ExecuteWaybillDispatchOrderRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillModifyRequest.java"
}, {
    "name": "ExecuteWaybillConfirmReceiptRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "ExecuteWaybillConfirmReceiptRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillConfirmReceiptRequest.java"
}, {
    "name": "CommodityCommonModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.CommodityCommonModifyParam", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Size", "java.util.Set"],
    "class_name": "CommodityCommonModifyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CommodityCommonModifyRequest.java"
}, {
    "name": "ModifyCarRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.ModifyCarParam", "com.dr.oursp.retail.logistics.car.consts.CarOwnerTypeEnum", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.Valid", "javax.validation.constraints.NotBlank"],
    "class_name": "ModifyCarRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ModifyCarRequest.java"
}, {
    "name": "SupplyModifyQuantityRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "SupplyModifyQuantityRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/SupplyModifyQuantityRequest.java"
}, {
    "name": "SupplyModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "SupplyModifyRequest extends SupplyCommonModifyRequest",
    "extend_name": "SupplyCommonModifyRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/SupplyModifyRequest.java"
}, {
    "name": "CategoryOptionParamModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "org.apache.commons.lang3.builder.EqualsBuilder", "org.apache.commons.lang3.builder.HashCodeBuilder", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryOptionParamModifyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CategoryOptionParamModifyRequest.java"
}, {
    "name": "SupplyModifySummaryRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size"],
    "class_name": "SupplyModifySummaryRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/SupplyModifySummaryRequest.java"
}, {
    "name": "WaybillOrderQueryRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.support.enums.Enumerations", "com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "java.util.Objects"],
    "class_name": "WaybillOrderQueryRequest extends PageRequest",
    "extend_name": "PageRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/WaybillOrderQueryRequest.java"
}, {
    "name": "LogisticsAddressModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "LogisticsAddressModifyRequest extends LogisticsAddressCommonModifyRequest",
    "extend_name": "LogisticsAddressCommonModifyRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/LogisticsAddressModifyRequest.java"
}, {
    "name": "CommodityCommonRuleRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.rule.CommodityRuleVo", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotNull", "java.math.BigDecimal", "java.util.Optional", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "CommodityCommonRuleRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CommodityCommonRuleRequest.java"
}, {
    "name": "CarrierSaveRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.PositiveOrZero"],
    "class_name": "CarrierSaveRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CarrierSaveRequest.java"
}, {
    "name": "SellerRemarkRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "SellerRemarkRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/SellerRemarkRequest.java"
}, {
    "name": "CarrierUpdateRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.PositiveOrZero"],
    "class_name": "CarrierUpdateRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CarrierUpdateRequest.java"
}, {
    "name": "CategorySaveRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "java.util.List"],
    "class_name": "CategorySaveRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CategorySaveRequest.java"
}, {
    "name": "CarrierRemarkRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "CarrierRemarkRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CarrierRemarkRequest.java"
}, {
    "name": "ExecuteWaybillFreeCheckRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteAffiliationEnum", "com.dr.oursp.retail.support.RangeNumber", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.PositiveOrZero", "java.util.List"],
    "class_name": "ExecuteWaybillFreeCheckRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillFreeCheckRequest.java"
}, {
    "name": "LogisticsAddressCommonModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.LogisticsAddressCommonModifyParam", "com.google.common.collect.Lists", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.*", "java.util.List", "java.util.stream.Collectors"],
    "class_name": "LogisticsAddressCommonModifyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/LogisticsAddressCommonModifyRequest.java"
}, {
    "name": "CreateCarRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.CreateCarParam", "com.dr.oursp.retail.logistics.car.consts.CarOwnerTypeEnum", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "CreateCarRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CreateCarRequest.java"
}, {
    "name": "CategoryOptionParamSaveRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "org.apache.commons.lang3.builder.EqualsBuilder", "org.apache.commons.lang3.builder.HashCodeBuilder", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryOptionParamSaveRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CategoryOptionParamSaveRequest.java"
}, {
    "name": "SupplyCommonModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.SupplyCommonModifyParam", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Size", "java.math.BigDecimal", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "SupplyCommonModifyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/SupplyCommonModifyRequest.java"
}, {
    "name": "PayTransferAddressByBidMarginRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "PayTransferAddressByBidMarginRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/PayTransferAddressByBidMarginRequest.java"
}, {
    "name": "ExecuteWaybillFeedbackRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "ExecuteWaybillFeedbackRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillFeedbackRequest.java"
}, {
    "name": "PlanWaybillCreateRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.util.Set"],
    "class_name": "PlanWaybillCreateRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/PlanWaybillCreateRequest.java"
}, {
    "name": "PayTransferAddressByPaymentRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "PayTransferAddressByPaymentRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/PayTransferAddressByPaymentRequest.java"
}, {
    "name": "LogisticsExecutePlanModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Positive", "java.util.Set"],
    "class_name": "LogisticsExecutePlanModifyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/LogisticsExecutePlanModifyRequest.java"
}, {
    "name": "TradeRejectBidRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.TradeRejectBidParam", "com.dr.oursp.retail.trade.consts.BidRejectTypeEnum", "com.dr.support.enums.Enumerations", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "TradeRejectBidRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/TradeRejectBidRequest.java"
}, {
    "name": "ExecuteWaybillDispatchOrderRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.CarWaybillModifyParam", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "ExecuteWaybillDispatchOrderRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillDispatchOrderRequest.java"
}, {
    "name": "PlanWaybillRuleRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.consts.TradeRuleVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "PlanWaybillRuleRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/PlanWaybillRuleRequest.java"
}, {
    "name": "ExecuteWaybillReceiveTrackRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "ExecuteWaybillReceiveTrackRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillReceiveTrackRequest.java"
}, {
    "name": "LogisticsAddressCommonModifyAreaRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.param.LogisticsAddressCommonModifyAreaParam", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size"],
    "class_name": "LogisticsAddressCommonModifyAreaRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/LogisticsAddressCommonModifyAreaRequest.java"
}, {
    "name": "ExecuteWaybillDeliveryNoticeRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "ExecuteWaybillDeliveryNoticeRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/ExecuteWaybillDeliveryNoticeRequest.java"
}, {
    "name": "CategoryDefineParamSaveRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "org.apache.commons.lang3.builder.EqualsBuilder", "org.apache.commons.lang3.builder.HashCodeBuilder", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryDefineParamSaveRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CategoryDefineParamSaveRequest.java"
}, {
    "name": "CommodityModifyRequest",
    "package": "com.dr.oursp.retail.app.api.http.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank"],
    "class_name": "CommodityModifyRequest extends CommodityCommonModifyRequest",
    "extend_name": "CommodityCommonModifyRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/CommodityModifyRequest.java"
}, {
    "name": "PlayerSaveRequest",
    "package": "com.dr.oursp.retail.app.api.http.request.player",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "PlayerSaveRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/request/player/PlayerSaveRequest.java"
}, {
    "name": "MobileSellingSupplyHallEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "MobileSellingSupplyHallEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/MobileSellingSupplyHallEnum.java"
}, {
    "name": "MobileSupplyingSupplyEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "MobileSupplyingSupplyEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/MobileSupplyingSupplyEnum.java"
}, {
    "name": "MobilePartnerManagementEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "MobilePartnerManagementEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/MobilePartnerManagementEnum.java"
}, {
    "name": "MobileSellingTradeOrderEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "MobileSellingTradeOrderEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/MobileSellingTradeOrderEnum.java"
}, {
    "name": "MobileSupplyingTradeOrderEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "MobileSupplyingTradeOrderEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/MobileSupplyingTradeOrderEnum.java"
}, {
    "name": "OptionsActionEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.retail.category.consts.OptionsStateEnum", "com.dr.support.enums.KeyValueEnum"],
    "class_name": "OptionsActionEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/OptionsActionEnum.java"
}, {
    "name": "MobileSellingSupplierManagementEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "MobileSellingSupplierManagementEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/MobileSellingSupplierManagementEnum.java"
}, {
    "name": "CategoryActionEnum",
    "package": "com.dr.oursp.retail.app.api.http.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.support.enums.KeyValueEnum"],
    "class_name": "CategoryActionEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/http/consts/CategoryActionEnum.java"
}, {
    "name": "MobileConveyingApi",
    "package": "com.dr.oursp.retail.app.api.mobile",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.ConveyingApp", "com.dr.oursp.retail.app.api.BasicApi", "com.dr.oursp.retail.app.api.http.PurchasingModelConvert", "com.dr.oursp.retail.app.api.http.request.ExecuteWaybillPageRequest", "com.dr.oursp.retail.app.api.http.request.QueryWaybillRequest", "com.dr.oursp.retail.app.api.http.request.TradeBidMarginRequest", "com.dr.oursp.retail.app.api.http.request.WaybillRemarkRequest", "com.dr.oursp.retail.app.api.http.response.TradeCapitalAccountResponse", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallLogicStateEnum", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteAffiliationEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.io.IOException", "java.time.Instant", "java.util.List", "java.util.Objects", "java.util.stream.Collectors"],
    "class_name": "MobileConveyingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/mobile/MobileConveyingApi.java"
}, {
    "name": "MobilePurchasingApi",
    "package": "com.dr.oursp.retail.app.api.mobile",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.PurchasingApp", "com.dr.oursp.retail.app.api.BasicApi", "com.dr.oursp.retail.app.api.http.PurchasingModelConvert", "com.dr.oursp.retail.app.api.http.consts.MobilePartnerManagementEnum", "com.dr.oursp.retail.app.api.http.request.*", "com.dr.oursp.retail.app.api.http.response.TradeCapitalAccountResponse", "com.dr.oursp.retail.app.service.except.CommodityBidMarginException", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.common.collect.Sets", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.time.Instant", "java.util.EnumSet", "java.util.List", "java.util.Objects", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "MobilePurchasingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/mobile/MobilePurchasingApi.java"
}, {
    "name": "MobileSupplyingApi",
    "package": "com.dr.oursp.retail.app.api.mobile",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.SupplyingApp", "com.dr.oursp.retail.app.api.BasicApi", "com.dr.oursp.retail.app.api.http.consts.MobileSupplyingSupplyEnum", "com.dr.oursp.retail.app.api.http.consts.MobileSupplyingTradeOrderEnum", "com.dr.oursp.retail.app.api.http.request.*", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.common.collect.Sets", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.util.Assert", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.EnumSet", "java.util.List", "java.util.Objects", "java.util.Set", "java.util.function.Function", "java.util.stream.Collectors"],
    "class_name": "MobileSupplyingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/mobile/MobileSupplyingApi.java"
}, {
    "name": "MobileConveyingTransportApi",
    "package": "com.dr.oursp.retail.app.api.mobile",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.retail.app.ConveyingApp", "com.dr.oursp.retail.app.api.BasicApi", "com.dr.oursp.retail.app.api.http.request.ExecuteWaybillDeliveryNoticeRequest", "com.dr.oursp.retail.app.api.http.request.ExecuteWaybillFeedbackRequest", "com.dr.oursp.retail.app.api.http.request.ExecuteWaybillLoadingRegistrationRequest", "com.dr.oursp.retail.app.api.http.request.ExecuteWaybillPageRequest", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank"],
    "class_name": "MobileConveyingTransportApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/mobile/MobileConveyingTransportApi.java"
}, {
    "name": "MobileSellingApi",
    "package": "com.dr.oursp.retail.app.api.mobile",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.FallPaged", "com.dr.oursp.globe.http.PageRequest", "com.dr.oursp.infra.account.domain.AccountInfoVO", "com.dr.oursp.infra.org.BizOrgService", "com.dr.oursp.retail.app.SellingApp", "com.dr.oursp.retail.app.api.BasicApi", "com.dr.oursp.retail.app.api.http.PurchasingModelConvert", "com.dr.oursp.retail.app.api.http.consts.MobilePartnerManagementEnum", "com.dr.oursp.retail.app.api.http.consts.MobileSellingSupplierManagementEnum", "com.dr.oursp.retail.app.api.http.consts.MobileSellingSupplyHallEnum", "com.dr.oursp.retail.app.api.http.consts.MobileSellingTradeOrderEnum", "com.dr.oursp.retail.app.api.http.request.CommodityCommonModifyRequest", "com.dr.oursp.retail.app.api.http.request.CommodityModifyRequest", "com.dr.oursp.retail.app.api.http.request.SellerRemarkRequest", "com.dr.oursp.retail.app.api.http.request.TradeOrderRemarkRequest", "com.dr.oursp.retail.app.api.http.response.TradeBidHistoryResponse", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.common.collect.Sets", "io.swagger.annotations.*", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.util.Assert", "org.springframework.validation.annotation.Validated", "org.springframework.web.bind.annotation.*", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.*", "java.util.function.Function", "java.util.stream.Collectors"],
    "class_name": "MobileSellingApi extends BasicApi",
    "extend_name": "BasicApi",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/mobile/MobileSellingApi.java"
}, {
    "name": "CommodityBidHandler",
    "package": "com.dr.oursp.retail.app.api.ws.handler.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.PurchasingApp", "com.dr.oursp.retail.app.api.ws.request.CommodityBidRequest", "com.dr.oursp.retail.app.api.ws.response.TradeBidResponse", "com.dr.oursp.retail.globe.config.web.RetailCurrentUser", "com.dr.oursp.retail.globe.config.ws.AbstractWebSocketHandlerDispatch", "com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "com.dr.oursp.retail.globe.config.ws.BuyerWebSocketHandlerDispatch", "com.dr.oursp.retail.globe.config.ws.DefaultWsExceptionResponse", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.token.Current", "com.dr.support.serialization.Serializations", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "org.springframework.web.socket.TextMessage", "org.springframework.web.socket.WebSocketSession", "javax.annotation.PostConstruct", "java.io.IOException"],
    "class_name": "CommodityBidHandler implements AbstractWebSocketHandlerDispatch.WsMessageHandler",
    "extend_name": "",
    "implements_name": ["AbstractWebSocketHandlerDispatch.WsMessageHandler"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/handler/commodity/CommodityBidHandler.java"
}, {
    "name": "CommodityBidHistoryHandler",
    "package": "com.dr.oursp.retail.app.api.ws.handler.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.PurchasingApp", "com.dr.oursp.retail.app.api.ws.consts.WsPushStateEnum", "com.dr.oursp.retail.app.api.ws.request.CommodityBidHistoryRequest", "com.dr.oursp.retail.app.api.ws.response.TradeBidHistoryResponse", "com.dr.oursp.retail.app.api.ws.timer.WsTimer", "com.dr.oursp.retail.app.api.ws.timer.WsTimerTask", "com.dr.oursp.retail.app.api.ws.timer.WsTimerTaskParam", "com.dr.oursp.retail.globe.config.ws.AbstractWebSocketHandlerDispatch", "com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "com.dr.oursp.retail.globe.config.ws.BuyerWebSocketHandlerDispatch", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.enums.Enumerations", "com.dr.support.serialization.Serializations", "lombok.Value", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "org.springframework.web.socket.WebSocketSession", "javax.annotation.PostConstruct", "java.util.List", "java.util.concurrent.TimeUnit", "java.util.stream.Collectors"],
    "class_name": "CommodityBidHistoryHandler implements AbstractWebSocketHandlerDispatch.WsMessageHandler",
    "extend_name": "",
    "implements_name": ["AbstractWebSocketHandlerDispatch.WsMessageHandler"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/handler/commodity/CommodityBidHistoryHandler.java"
}, {
    "name": "PlanWaybillBidHandler",
    "package": "com.dr.oursp.retail.app.api.ws.handler.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.ConveyingApp", "com.dr.oursp.retail.app.api.ws.request.PlanWaybillBidRequest", "com.dr.oursp.retail.app.api.ws.response.TradeBidResponse", "com.dr.oursp.retail.globe.config.web.RetailCurrentUser", "com.dr.oursp.retail.globe.config.ws.AbstractWebSocketHandlerDispatch", "com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "com.dr.oursp.retail.globe.config.ws.ConveyingWebSocketHandlerDispatch", "com.dr.oursp.retail.globe.config.ws.DefaultWsExceptionResponse", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.token.Current", "com.dr.support.serialization.Serializations", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "org.springframework.web.socket.TextMessage", "org.springframework.web.socket.WebSocketSession", "javax.annotation.PostConstruct", "java.io.IOException"],
    "class_name": "PlanWaybillBidHandler implements AbstractWebSocketHandlerDispatch.WsMessageHandler",
    "extend_name": "",
    "implements_name": ["AbstractWebSocketHandlerDispatch.WsMessageHandler"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/handler/waybill/PlanWaybillBidHandler.java"
}, {
    "name": "PlanWaybillBidHistoryHandler",
    "package": "com.dr.oursp.retail.app.api.ws.handler.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.ConveyingApp", "com.dr.oursp.retail.app.api.ws.consts.WsPushStateEnum", "com.dr.oursp.retail.app.api.ws.request.PlanWaybillBidHistoryRequest", "com.dr.oursp.retail.app.api.ws.response.TradeBidHistoryResponse", "com.dr.oursp.retail.globe.config.web.RetailCurrentUser", "com.dr.oursp.retail.globe.config.ws.AbstractWebSocketHandlerDispatch", "com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "com.dr.oursp.retail.globe.config.ws.ConveyingWebSocketHandlerDispatch", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.token.Current", "com.dr.support.enums.Enumerations", "com.dr.support.serialization.Serializations", "com.google.common.cache.Cache", "com.google.common.cache.CacheBuilder", "lombok.Value", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "org.springframework.web.socket.TextMessage", "org.springframework.web.socket.WebSocketSession", "javax.annotation.PostConstruct", "java.io.IOException", "java.util.List", "java.util.Objects", "java.util.Timer", "java.util.TimerTask", "java.util.concurrent.TimeUnit", "java.util.stream.Collectors"],
    "class_name": "PlanWaybillBidHistoryHandler implements AbstractWebSocketHandlerDispatch.WsMessageHandler",
    "extend_name": "",
    "implements_name": ["AbstractWebSocketHandlerDispatch.WsMessageHandler"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/handler/waybill/PlanWaybillBidHistoryHandler.java"
}, {
    "name": "TradeBidHistoryResponse",
    "package": "com.dr.oursp.retail.app.api.ws.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.config.ws.AbstractWsResponse", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.trade.consts.BidStateEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.SuperBuilder"],
    "class_name": "TradeBidHistoryResponse extends AbstractWsResponse",
    "extend_name": "AbstractWsResponse",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/response/TradeBidHistoryResponse.java"
}, {
    "name": "TradeBidResponse",
    "package": "com.dr.oursp.retail.app.api.ws.response",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.config.ws.AbstractWsResponse", "lombok.experimental.SuperBuilder"],
    "class_name": "TradeBidResponse extends AbstractWsResponse",
    "extend_name": "AbstractWsResponse",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/response/TradeBidResponse.java"
}, {
    "name": "WsTimerTask",
    "package": "com.dr.oursp.retail.app.api.ws.timer",
    "type": "abstract class",
    "imports": ["com.dr.support.serialization.Serializations", "com.google.common.cache.Cache", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "org.springframework.web.socket.TextMessage", "org.springframework.web.socket.WebSocketSession", "java.util.Objects", "java.util.TimerTask"],
    "class_name": "WsTimerTask extends TimerTask",
    "extend_name": "TimerTask",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/timer/WsTimerTask.java"
}, {
    "name": "WsTimer",
    "package": "com.dr.oursp.retail.app.api.ws.timer",
    "type": "class",
    "imports": ["com.google.common.cache.Cache", "com.google.common.cache.CacheBuilder", "java.util.Timer", "java.util.concurrent.TimeUnit"],
    "class_name": "WsTimer",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/timer/WsTimer.java"
}, {
    "name": "WsTimerTaskParam",
    "package": "com.dr.oursp.retail.app.api.ws.timer",
    "type": "interface",
    "imports": ["org.springframework.web.socket.WebSocketSession"],
    "class_name": "WsTimerTaskParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/timer/WsTimerTaskParam.java"
}, {
    "name": "CommodityBidHistoryRequest",
    "package": "com.dr.oursp.retail.app.api.ws.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "CommodityBidHistoryRequest extends AbstractWsRequest",
    "extend_name": "AbstractWsRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/request/CommodityBidHistoryRequest.java"
}, {
    "name": "PlanWaybillBidRequest",
    "package": "com.dr.oursp.retail.app.api.ws.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "PlanWaybillBidRequest extends AbstractWsRequest",
    "extend_name": "AbstractWsRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/request/PlanWaybillBidRequest.java"
}, {
    "name": "PlanWaybillBidHistoryRequest",
    "package": "com.dr.oursp.retail.app.api.ws.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "PlanWaybillBidHistoryRequest extends AbstractWsRequest",
    "extend_name": "AbstractWsRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/request/PlanWaybillBidHistoryRequest.java"
}, {
    "name": "CommodityBidRequest",
    "package": "com.dr.oursp.retail.app.api.ws.request",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.config.ws.AbstractWsRequest", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal"],
    "class_name": "CommodityBidRequest extends AbstractWsRequest",
    "extend_name": "AbstractWsRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/request/CommodityBidRequest.java"
}, {
    "name": "WsPushStateEnum",
    "package": "com.dr.oursp.retail.app.api.ws.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "WsPushStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/api/ws/consts/WsPushStateEnum.java"
}, {
    "name": "TradeContractService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.ContractOrderPushFactory", "com.dr.oursp.retail.player.reference.vo.TradeOrderRemoteVO", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service"],
    "class_name": "TradeContractService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/TradeContractService.java"
}, {
    "name": "PartnerService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.Partner", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.partner.domain.RepeatException", "com.dr.oursp.retail.partner.domain.Selector", "com.dr.oursp.retail.partner.entity.PartnerRemark", "com.dr.oursp.retail.partner.repository.PartnerRepository", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.consts.StatisticsConstant", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "java.util.AbstractMap", "java.util.List", "java.util.Optional", "java.util.function.BiPredicate", "java.util.stream.Collectors"],
    "class_name": "PartnerService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/PartnerService.java"
}, {
    "name": "PlanWaybillService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.event.logistics.waybill.PlanWaybillEventDriver", "com.dr.oursp.retail.app.service.event.logistics.waybill.PlanWaybillPutOnEvent", "com.dr.oursp.retail.app.service.event.logistics.waybill.PlanWaybillTakeDownEvent", "com.dr.oursp.retail.app.service.event.logistics.waybill.trade.PlanWaybillBidDealEvent", "com.dr.oursp.retail.app.service.event.logistics.waybill.trade.PlanWaybillBidRejectEvent", "com.dr.oursp.retail.app.service.event.logistics.waybill.trade.PlanWaybillTradeDealEvent", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.processor.PlanWaybillHallLogicalStateProcessor", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.processor.PlanWaybillHallTradeBidLogicalStateProcessor", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.processor.PlanWaybillLogicalStateProcessor", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallLogicStateEnum", "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallTradeBidLogicStateEnum", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.app.service.param.TradeConfirmBidParam", "com.dr.oursp.retail.app.service.param.TradeRejectBidParam", "com.dr.oursp.retail.app.service.trade.TradeService", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.consts.*", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.PlanWaybill", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillModifiableProperties", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillModifiablePropertiesImpl", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillTradeRuleDefinition", "com.dr.oursp.retail.logistics.waybill.plan.domain.AnySelector", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.domain.RepeatException", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxyFactory", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetailBuilder", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.player.account.repo.CapitalAccountRepository", "com.dr.oursp.retail.player.repository.AggregateRepository", "com.dr.oursp.retail.player.repository.RetailPlayerRepository", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.consts.StatisticsConstant", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.TradeItemFactory", "com.dr.oursp.retail.trade.checker.CheckPredicate", "com.dr.oursp.retail.trade.checker.TradeChecker", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.deal.TradeDeal", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.bid.domain.TradeBidRecordModifier", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.retail.trade.module.session.TradeSessionCheckFunction", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "com.dr.oursp.retail.trade.player.Seller", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.support.trace.LogElapsedTime", "com.google.common.base.Throwables", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Transactional", "org.springframework.util.Assert", "org.springframework.util.CollectionUtils", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.io.IOException", "java.time.Instant", "java.util.*", "java.util.function.Function", "java.util.function.Predicate", "java.util.stream.Collectors"],
    "class_name": "PlanWaybillService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/PlanWaybillService.java"
}, {
    "name": "ExecuteOrderService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.domain.ModifierException", "com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderProcessPropertiesImplement", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderApprovalActionEnum", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderLogicStateEnum", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrder", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.order.domain.rule.ExecuteOrderRuleVO", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.strategy.basic.token.Current", "com.dr.support.trace.LogElapsedTime", "com.google.common.base.Throwables", "com.google.common.collect.Lists", "lombok.AllArgsConstructor", "lombok.Data", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Transactional", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.io.IOException", "java.util.List", "java.util.Objects", "java.util.Optional", "java.util.Set", "java.util.function.BooleanSupplier", "java.util.function.Function", "java.util.function.Predicate", "java.util.stream.Collectors"],
    "class_name": "ExecuteOrderService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/ExecuteOrderService.java"
}, {
    "name": "InvoiceService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.retail.invoice.InvoiceWrite", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.invoice.repository.InvoiceRepository", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.stereotype.Service"],
    "class_name": "InvoiceService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/InvoiceService.java"
}, {
    "name": "CarService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.param.CreateCarParam", "com.dr.oursp.retail.app.service.param.ModifyCarParam", "com.dr.oursp.retail.logistics.car.consts.CarAvailableEnum", "com.dr.oursp.retail.logistics.car.domain.Car", "com.dr.oursp.retail.logistics.car.domain.CarVo", "com.dr.oursp.retail.logistics.car.domain.SelectorAny", "com.dr.oursp.retail.logistics.car.repository.CarRepository", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteAffiliationEnum", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "java.util.Collections", "java.util.List", "java.util.Objects", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "CarService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/CarService.java"
}, {
    "name": "QualityService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.param.QualityReportCommonModifyParam", "com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.domain.Creator", "com.dr.oursp.retail.quality.domain.QualityReport", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.quality.repository.QualityReportRepository", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "java.util.List", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "QualityService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/QualityService.java"
}, {
    "name": "PlayerService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.infra.account.service.AccountService", "com.dr.oursp.infra.app.api.http.request.auth.AppAuthDetailRequest", "com.dr.oursp.infra.app.service.AppManagerService", "com.dr.oursp.infra.org.OpOrgService", "com.dr.oursp.retail.app.service.param.player.PlayerModelConvert", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.CapitalAccount", "com.dr.oursp.retail.player.account.CapitalAccountSelector", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountStateEnum", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountNotFoundException", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxyFactory", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceiptByRedirectUrl", "com.dr.oursp.retail.player.account.repo.CapitalAccountRepository", "com.dr.oursp.retail.player.consts.DockingPlatformEnum", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.domain.RetailPlayerSelector", "com.dr.oursp.retail.player.reference.caller.pay.exception.DrPayCenterFeignException", "com.dr.oursp.retail.player.reference.entity.IdentityRemoteRelationEntity", "com.dr.oursp.retail.player.reference.repository.AccountIdentityRemoteRelationAggregation", "com.dr.oursp.retail.player.reference.vo.BaseRemoteVO", "com.dr.oursp.retail.player.repository.AggregateRepository", "com.dr.oursp.retail.player.repository.RetailPlayerRepository", "com.dr.oursp.retail.player.vo.RetailPlayerPropDefinition", "com.dr.oursp.retail.player.vo.RetailPlayerProps", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.consts.IdentityTypeEnum", "com.dr.oursp.strategy.basic.identity.domain.vo.IdentityVO", "com.dr.oursp.strategy.basic.identity.entity.IdentityEntity", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.oursp.third.consts.BizDomainEnum", "com.dr.oursp.third.pay.PayCenter", "com.dr.oursp.third.pay.ThirdPlatformCapitalAccount", "com.dr.oursp.third.pay.repo.PayCenterSubjectEntity", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Transactional", "org.springframework.util.Assert", "java.math.BigDecimal", "java.util.List", "java.util.Objects", "java.util.Optional", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "PlayerService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/PlayerService.java"
}, {
    "name": "DriverService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.infra.account.service.AccountService", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.logistics.freighter.consts.CarrierRoleEnum", "com.dr.oursp.retail.logistics.freighter.consts.CarrierSignedStateEnum", "com.dr.oursp.retail.logistics.freighter.domain.Driver", "com.dr.oursp.retail.logistics.freighter.domain.DriverVO", "com.dr.oursp.retail.logistics.freighter.repository.RetailDriverRepository", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.consts.IdentityTypeEnum", "com.dr.oursp.strategy.setting.PlatformSetting", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Transactional", "org.springframework.util.Assert", "java.math.BigDecimal", "java.util.Collection", "java.util.List", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "DriverService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/DriverService.java"
}, {
    "name": "AddressService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.param.LogisticsAddressCommonModifyAreaParam", "com.dr.oursp.retail.app.service.param.LogisticsAddressCommonModifyParam", "com.dr.oursp.retail.logistics.address.domain.Address", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.address.domain.Selector", "com.dr.oursp.retail.logistics.address.repository.AddressRepository", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "java.util.List", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "AddressService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/AddressService.java"
}, {
    "name": "ExecuteWaybillService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.logical.logistics.waybill.execute.ExecuteInExecutionStateProcessor", "com.dr.oursp.retail.app.service.param.CarWaybillModifyParam", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillModifiableProperties", "com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillModifiablePropertiesImpl", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybill", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.SelectorAny", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillRepository", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteAffiliationEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Lists", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Transactional", "javax.validation.constraints.NotBlank", "java.util.*", "java.util.function.Predicate", "java.util.stream.Collectors", "java.util.stream.Stream"],
    "class_name": "ExecuteWaybillService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/ExecuteWaybillService.java"
}, {
    "name": "CommodityService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.domain.ModifierException", "com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.competition.CommoditySupplyMultipleResourceCompetition", "com.dr.oursp.retail.app.service.competition.ResourceLocker", "com.dr.oursp.retail.app.service.event.commodity.CommodityEventDriver", "com.dr.oursp.retail.app.service.event.commodity.CommodityPutOnEvent", "com.dr.oursp.retail.app.service.event.commodity.CommodityTakeDownEvent", "com.dr.oursp.retail.app.service.event.commodity.supply.SupplyTakeDownEvent", "com.dr.oursp.retail.app.service.event.commodity.trade.CommodityBidDealEvent", "com.dr.oursp.retail.app.service.event.commodity.trade.CommodityBidRejectEvent", "com.dr.oursp.retail.app.service.event.commodity.trade.CommodityTradeDealEvent", "com.dr.oursp.retail.app.service.logical.commodity.coal.LogicStateMatcher", "com.dr.oursp.retail.app.service.order.CommodityTradeOrderService", "com.dr.oursp.retail.app.service.param.CommodityCommonModifyParam", "com.dr.oursp.retail.app.service.param.SupplyCommonModifyParam", "com.dr.oursp.retail.app.service.param.TradeConfirmBidParam", "com.dr.oursp.retail.app.service.param.TradeRejectBidParam", "com.dr.oursp.retail.app.service.trade.TradeService", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.coal.Commodity", "com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityModifiableProperties", "com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityModifiablePropertiesImpl", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.domain.AnySelector", "com.dr.oursp.retail.commodity.coal.domain.Creator", "com.dr.oursp.retail.commodity.coal.repository.TradeCommodityRepository", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleChecker", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleVo", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.consts.CommodityOrderStateEnum", "com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyModifiableProperties", "com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyModifiablePropertiesImpl", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.*", "com.dr.oursp.retail.commodity.supply.coal.repository.SupplyRepository", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleVO", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.globe.lock.RedisLockConfig", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.partner.domain.RepeatException", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountNotFoundException", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferRequestException", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferResponseException", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetailBuilder", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.player.reference.vo.TradeOrderRemoteVO", "com.dr.oursp.retail.quality.consts.QualityTypeEnum", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.consts.StatisticsConstant", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.Idempotent.RedisLocker", "com.dr.oursp.retail.support.Idempotent.ResourceCompetitionBuilder", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.TradeItemFactory", "com.dr.oursp.retail.trade.checker.CheckPredicate", "com.dr.oursp.retail.trade.checker.TradeChecker", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.deal.TradeDeal", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.bid.domain.TradeBidRecordModifier", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.retail.trade.module.session.TradeSessionCheckFunction", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "com.dr.oursp.retail.trade.player.Seller", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.setting.ServerSettings", "com.dr.support.competition.ResourceCallback", "com.dr.support.competition.ResourceCompetition", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.competition.exception.CallbackExecuteException", "com.dr.support.competition.exception.ReleaseLockException", "com.dr.support.trace.LogElapsedTime", "com.google.common.base.Throwables", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.beans.factory.annotation.Qualifier", "org.springframework.data.redis.core.RedisTemplate", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Transactional", "org.springframework.util.Assert", "javax.validation.constraints.NotBlank", "java.io.IOException", "java.time.Instant", "java.util.*", "java.util.concurrent.atomic.AtomicReference", "java.util.function.BiPredicate", "java.util.stream.Collectors"],
    "class_name": "CommodityService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/CommodityService.java"
}, {
    "name": "CategoryService",
    "package": "com.dr.oursp.retail.app.service",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.api.http.consts.CategoryActionEnum", "com.dr.oursp.retail.app.api.http.consts.OptionsActionEnum", "com.dr.oursp.retail.category.consts.OptionsStateEnum", "com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.oursp.retail.category.domain.Category", "com.dr.oursp.retail.category.domain.CategoryOption", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.category.domain.CategoryVO", "com.dr.oursp.retail.category.entity.CategoryDefineParam", "com.dr.oursp.retail.category.entity.CategoryOptionParam", "com.dr.oursp.retail.category.repository.CategoryOptionsRepository", "com.dr.oursp.retail.category.repository.CategoryRepository", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.strategy.basic.entity.seed.AutoIncrementSeed", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal", "java.util.LinkedHashSet", "java.util.List", "java.util.stream.Collectors"],
    "class_name": "CategoryService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/CategoryService.java"
}, {
    "name": "CommodityTradeOrderService",
    "package": "com.dr.oursp.retail.app.service.order",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.consts.CommodityOrderStateEnum", "com.dr.oursp.retail.commodity.order.domain.CommodityOrder", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.order.repository.CommodityOrderRepository", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "java.util.List", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "CommodityTradeOrderService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/order/CommodityTradeOrderService.java"
}, {
    "name": "WaybillTradeOrderService",
    "package": "com.dr.oursp.retail.app.service.order",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.app.service.trade.TradeService", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.domain.Waybill", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.logistics.waybill.order.repository.WaybillRepository", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetailBuilder", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.service.StatisticsService", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.enums.KeyValueEnum", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.List", "java.util.Objects", "java.util.Optional", "java.util.UUID", "java.util.function.Predicate", "java.util.stream.Collectors"],
    "class_name": "WaybillTradeOrderService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/order/WaybillTradeOrderService.java"
}, {
    "name": "SquaringUpGoodsService",
    "package": "com.dr.oursp.retail.app.service.squaring",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.InvoiceService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.squaring.behavior.ApprovalData", "com.dr.oursp.retail.squaring.behavior.DataNexus", "com.dr.oursp.retail.squaring.goods.SquaringUpGoods", "com.dr.oursp.retail.squaring.goods.SquaringUpGoodsVo", "com.dr.oursp.retail.squaring.goods.domain.Creator", "com.dr.oursp.retail.squaring.goods.repository.SquaringUpGoodsRepository", "com.dr.oursp.retail.squaring.remote.SquaringUpManager", "com.dr.oursp.retail.squaring.remote.exception.SquaringException", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Maps", "lombok.Builder", "lombok.Data", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.time.Instant", "java.util.*", "java.util.stream.Collectors"],
    "class_name": "SquaringUpGoodsService extends SquaringUpService",
    "extend_name": "SquaringUpService",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/squaring/SquaringUpGoodsService.java"
}, {
    "name": "SquaringUpWaybillService",
    "package": "com.dr.oursp.retail.app.service.squaring",
    "type": "class",
    "imports": ["com.dr.oursp.globe.dto.PageParam", "com.dr.oursp.retail.app.service.InvoiceService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.order.domain.WaybillOrderVO", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.squaring.behavior.ApprovalData", "com.dr.oursp.retail.squaring.behavior.DataNexus", "com.dr.oursp.retail.squaring.remote.SquaringUpManager", "com.dr.oursp.retail.squaring.remote.exception.SquaringException", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybill", "com.dr.oursp.retail.squaring.waybill.SquaringUpWaybillVo", "com.dr.oursp.retail.squaring.waybill.domain.Creator", "com.dr.oursp.retail.squaring.waybill.repository.SquaringUpWaybillRepository", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Maps", "lombok.Builder", "lombok.Data", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.time.Instant", "java.util.List", "java.util.Map", "java.util.Optional", "java.util.UUID", "java.util.stream.Collectors"],
    "class_name": "SquaringUpWaybillService extends SquaringUpService",
    "extend_name": "SquaringUpService",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/squaring/SquaringUpWaybillService.java"
}, {
    "name": "SquaringUpService",
    "package": "com.dr.oursp.retail.app.service.squaring",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.squaring.remote.SquaringUpManager", "com.dr.oursp.retail.squaring.remote.exception.SquaringException", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Maps", "lombok.extern.slf4j.Slf4j", "org.apache.commons.compress.utils.Lists", "java.util.List", "java.util.Map"],
    "class_name": "SquaringUpService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/squaring/SquaringUpService.java"
}, {
    "name": "TradeService",
    "package": "com.dr.oursp.retail.app.service.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.order.repository.CommodityOrderRepository", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.trade.Trade", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.checker.TradeChecker", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.deal.TradeDeal", "com.dr.oursp.retail.trade.deal.TradeDealBuilder", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordBuilder", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.bid.domain.repository.TradeBidRecordRepository", "com.dr.oursp.retail.trade.module.margin.TradeMargin", "com.dr.oursp.retail.trade.module.margin.TradeMarginBuilder", "com.dr.oursp.retail.trade.module.margin.domain.TradeMarginRepository", "com.dr.oursp.retail.trade.module.prepare.TradeSignUpBuilder", "com.dr.oursp.retail.trade.module.prepare.domain.TradeSignUpRepository", "com.dr.oursp.retail.trade.module.session.TradeSession", "com.dr.oursp.retail.trade.module.session.TradeSessionBuilder", "com.dr.oursp.retail.trade.module.session.TradeSessionCheckFunction", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "com.dr.oursp.retail.trade.module.session.domain.repository.TradeSessionRepository", "com.dr.oursp.retail.trade.player.Buyer", "com.dr.oursp.retail.trade.player.BuyerBuilder", "com.dr.oursp.retail.trade.player.Seller", "com.dr.oursp.retail.trade.player.SellerBuilder", "com.dr.oursp.retail.trade.player.behavior.TradePrepare", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.enums.Enumerations", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "javax.validation.constraints.NotNull", "java.util.List", "java.util.Optional", "java.util.Set"],
    "class_name": "TradeService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/trade/TradeService.java"
}, {
    "name": "CommodityBidMarginException",
    "package": "com.dr.oursp.retail.app.service.except",
    "type": "class",
    "imports": [],
    "class_name": "CommodityBidMarginException extends Exception",
    "extend_name": "Exception",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/except/CommodityBidMarginException.java"
}, {
    "name": "ModifyCarParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.car.consts.CarOwnerTypeEnum", "lombok.Data"],
    "class_name": "ModifyCarParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/ModifyCarParam.java"
}, {
    "name": "LogisticsAddressCommonModifyParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["lombok.Builder", "lombok.Getter", "lombok.experimental.Accessors", "java.util.List"],
    "class_name": "LogisticsAddressCommonModifyParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/LogisticsAddressCommonModifyParam.java"
}, {
    "name": "LogisticsAddressCommonModifyAreaParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.address.entity.AddressArea", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size"],
    "class_name": "LogisticsAddressCommonModifyAreaParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/LogisticsAddressCommonModifyAreaParam.java"
}, {
    "name": "QualityReportCommonModifyParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.consts.QualityTypeEnum", "com.dr.oursp.retail.support.RangeNumber", "lombok.Builder", "lombok.Data", "lombok.Getter", "lombok.experimental.Accessors", "java.util.ArrayList", "java.util.List"],
    "class_name": "QualityReportCommonModifyParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/QualityReportCommonModifyParam.java"
}, {
    "name": "TradeRejectBidParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.trade.consts.BidRejectTypeEnum", "lombok.Builder", "lombok.Data"],
    "class_name": "TradeRejectBidParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/TradeRejectBidParam.java"
}, {
    "name": "CarWaybillModifyParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "lombok.Builder", "lombok.Data"],
    "class_name": "CarWaybillModifyParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/CarWaybillModifyParam.java"
}, {
    "name": "CreateCarParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.car.consts.CarOwnerTypeEnum", "lombok.Data"],
    "class_name": "CreateCarParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/CreateCarParam.java"
}, {
    "name": "TradeConfirmBidParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "lombok.Builder", "lombok.Data"],
    "class_name": "TradeConfirmBidParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/TradeConfirmBidParam.java"
}, {
    "name": "SupplyCommonModifyParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "lombok.Builder", "lombok.Data", "java.util.Set"],
    "class_name": "SupplyCommonModifyParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/SupplyCommonModifyParam.java"
}, {
    "name": "CommodityCommonModifyParam",
    "package": "com.dr.oursp.retail.app.service.param",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.rule.CommodityRuleVo", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "java.util.Set"],
    "class_name": "CommodityCommonModifyParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/CommodityCommonModifyParam.java"
}, {
    "name": "PlayerModelConvert",
    "package": "com.dr.oursp.retail.app.service.param.player",
    "type": "class",
    "imports": ["com.dr.oursp.infra.app.api.http.request.auth.AppAuthDetailRequest", "com.dr.oursp.infra.app.consts.AppAuthActionEnum", "com.dr.oursp.infra.app.consts.AppAuthEnum", "com.dr.oursp.retail.player.consts.RetailRoleAppRelationEnum", "com.dr.oursp.retail.player.vo.RetailPlayerPropDefinition", "com.dr.support.enums.Enumerations", "com.google.common.collect.Lists", "com.google.common.collect.Sets", "java.time.LocalDateTime", "java.time.ZoneOffset"],
    "class_name": "PlayerModelConvert",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/param/player/PlayerModelConvert.java"
}, {
    "name": "LogicStatePredicate",
    "package": "com.dr.oursp.retail.app.service.logical.commodity.coal",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "lombok.AllArgsConstructor", "lombok.Data", "java.util.List", "java.util.function.BooleanSupplier"],
    "class_name": "LogicStatePredicate",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/commodity/coal/LogicStatePredicate.java"
}, {
    "name": "LogicStateMatcher",
    "package": "com.dr.oursp.retail.app.service.logical.commodity.coal",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.google.common.collect.Lists", "java.util.List", "java.util.function.BooleanSupplier"],
    "class_name": "LogicStateMatcher",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/commodity/coal/LogicStateMatcher.java"
}, {
    "name": "PlanWaybillLogicalStateProcessor",
    "package": "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.processor",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.google.common.collect.Lists", "lombok.AllArgsConstructor", "lombok.Getter", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Arrays", "java.util.List", "java.util.Optional", "java.util.function.Predicate"],
    "class_name": "PlanWaybillLogicalStateProcessor",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/logistics/waybill/plan/processor/PlanWaybillLogicalStateProcessor.java"
}, {
    "name": "PlanWaybillHallTradeBidLogicalStateProcessor",
    "package": "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.processor",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallTradeBidLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.google.common.collect.Lists", "lombok.AllArgsConstructor", "lombok.Getter", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Arrays", "java.util.List", "java.util.Optional", "java.util.function.Predicate"],
    "class_name": "PlanWaybillHallTradeBidLogicalStateProcessor",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/logistics/waybill/plan/processor/PlanWaybillHallTradeBidLogicalStateProcessor.java"
}, {
    "name": "PlanWaybillHallLogicalStateProcessor",
    "package": "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.processor",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state.PlanWaybillHallLogicStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.google.common.collect.Lists", "lombok.AllArgsConstructor", "lombok.Getter", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Arrays", "java.util.List", "java.util.Optional", "java.util.function.Predicate"],
    "class_name": "PlanWaybillHallLogicalStateProcessor",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/logistics/waybill/plan/processor/PlanWaybillHallLogicalStateProcessor.java"
}, {
    "name": "PlanWaybillHallLogicStateEnum",
    "package": "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "PlanWaybillHallLogicStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/logistics/waybill/plan/state/PlanWaybillHallLogicStateEnum.java"
}, {
    "name": "PlanWaybillHallTradeBidLogicStateEnum",
    "package": "com.dr.oursp.retail.app.service.logical.logistics.waybill.plan.state",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "PlanWaybillHallTradeBidLogicStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/logistics/waybill/plan/state/PlanWaybillHallTradeBidLogicStateEnum.java"
}, {
    "name": "ExecuteInExecutionStateProcessor",
    "package": "com.dr.oursp.retail.app.service.logical.logistics.waybill.execute",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteInExecutionStateEnum", "com.google.common.collect.Lists", "lombok.AllArgsConstructor", "lombok.Getter", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Arrays", "java.util.List", "java.util.Optional", "java.util.function.Predicate"],
    "class_name": "ExecuteInExecutionStateProcessor",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/logical/logistics/waybill/execute/ExecuteInExecutionStateProcessor.java"
}, {
    "name": "ResourceLocker",
    "package": "com.dr.oursp.retail.app.service.competition",
    "type": "class",
    "imports": ["com.dr.support.competition.ResourceCallback", "com.dr.support.competition.ResourceCompetition", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.competition.exception.CallbackExecuteException", "com.dr.support.competition.exception.ReleaseLockException", "com.dr.support.enums.KeyValueEnum", "lombok.Builder", "lombok.Getter", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "java.util.Objects", "java.util.Optional", "java.util.function.Consumer"],
    "class_name": "ResourceLocker",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/competition/ResourceLocker.java"
}, {
    "name": "CommoditySupplyMultipleResourceCompetition",
    "package": "com.dr.oursp.retail.app.service.competition",
    "type": "class",
    "imports": ["com.dr.support.competition.AbstractMultipleResourceCompetition", "com.dr.support.competition.ResourceCallback", "com.dr.support.competition.ResourceCompetitionLocker", "com.google.common.collect.Lists", "lombok.Builder", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "java.util.List"],
    "class_name": "CommoditySupplyMultipleResourceCompetition",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/competition/CommoditySupplyMultipleResourceCompetition.java"
}, {
    "name": "CommodityPutOnEventListener",
    "package": "com.dr.oursp.retail.app.service.event.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.CommodityService", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "CommodityPutOnEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/CommodityPutOnEventListener.java"
}, {
    "name": "CommodityTakeDownEventListener",
    "package": "com.dr.oursp.retail.app.service.event.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.CommodityService", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.TradeItemFactory", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "CommodityTakeDownEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/CommodityTakeDownEventListener.java"
}, {
    "name": "CommodityTakeDownEvent",
    "package": "com.dr.oursp.retail.app.service.event.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.event.Event", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "CommodityTakeDownEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/CommodityTakeDownEvent.java"
}, {
    "name": "CommodityPutOnEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "CommodityPutOnEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/CommodityPutOnEventDriver.java"
}, {
    "name": "CommodityTakeDownEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "CommodityTakeDownEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/CommodityTakeDownEventDriver.java"
}, {
    "name": "CommodityEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.event.commodity.supply.SupplyTakeDownEvent", "com.dr.oursp.retail.app.service.event.commodity.supply.SupplyTakeDownEventDriver", "com.dr.oursp.retail.app.service.event.commodity.trade.*", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "CommodityEventDriver",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/CommodityEventDriver.java"
}, {
    "name": "CommodityPutOnEvent",
    "package": "com.dr.oursp.retail.app.service.event.commodity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.event.Event", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "CommodityPutOnEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/CommodityPutOnEvent.java"
}, {
    "name": "CommodityBidDealEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "CommodityBidDealEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityBidDealEventDriver.java"
}, {
    "name": "CommodityBidRejectEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "CommodityBidRejectEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityBidRejectEventDriver.java"
}, {
    "name": "CommodityBidRejectEventListener",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.CommodityService", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.TradeItemVO", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "CommodityBidRejectEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityBidRejectEventListener.java"
}, {
    "name": "CommodityBidDealEvent",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.Event", "com.dr.oursp.retail.trade.deal.TradeDeal", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "CommodityBidDealEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityBidDealEvent.java"
}, {
    "name": "CommodityTradeDealEvent",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.Event", "com.dr.oursp.retail.trade.deal.TradeDeal", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "CommodityTradeDealEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityTradeDealEvent.java"
}, {
    "name": "CommodityTradeDealEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "CommodityTradeDealEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityTradeDealEventDriver.java"
}, {
    "name": "CommodityBidRejectEvent",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.event.Event", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.Data", "lombok.EqualsAndHashCode"],
    "class_name": "CommodityBidRejectEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityBidRejectEvent.java"
}, {
    "name": "CommodityTradeDealEventListener",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.CommodityService", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.TradeItemVO", "com.dr.support.competition.exception.AcquireLockException", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "CommodityTradeDealEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityTradeDealEventListener.java"
}, {
    "name": "CommodityBidDealEventListener",
    "package": "com.dr.oursp.retail.app.service.event.commodity.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.CommodityService", "com.dr.oursp.retail.app.service.InvoiceService", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.support.snapshot.Snapshot", "com.dr.oursp.retail.trade.consts.BidStateEnum", "com.dr.oursp.retail.trade.deal.TradeDeal", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct", "java.time.Instant"],
    "class_name": "CommodityBidDealEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/trade/CommodityBidDealEventListener.java"
}, {
    "name": "SupplyTakeDownEvent",
    "package": "com.dr.oursp.retail.app.service.event.commodity.supply",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.domain.SupplyStateChangedHandler", "com.dr.oursp.retail.support.event.Event", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "SupplyTakeDownEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/supply/SupplyTakeDownEvent.java"
}, {
    "name": "SupplyTakeDownEventListener",
    "package": "com.dr.oursp.retail.app.service.event.commodity.supply",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.CommodityService", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.support.competition.exception.AcquireLockException", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct", "java.util.Optional", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "SupplyTakeDownEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/supply/SupplyTakeDownEventListener.java"
}, {
    "name": "SupplyTakeDownEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.commodity.supply",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "SupplyTakeDownEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/commodity/supply/SupplyTakeDownEventDriver.java"
}, {
    "name": "PlanWaybillEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.event.logistics.waybill.trade.*", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "PlanWaybillEventDriver",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/PlanWaybillEventDriver.java"
}, {
    "name": "PlanWaybillPutOnEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "PlanWaybillPutOnEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/PlanWaybillPutOnEventDriver.java"
}, {
    "name": "PlanWaybillTakeDownEventListener",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.ExecuteOrderService", "com.dr.oursp.retail.app.service.PlanWaybillService", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.TradeItemFactory", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "PlanWaybillTakeDownEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/PlanWaybillTakeDownEventListener.java"
}, {
    "name": "PlanWaybillTakeDownEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "PlanWaybillTakeDownEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/PlanWaybillTakeDownEventDriver.java"
}, {
    "name": "PlanWaybillPutOnEventListener",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.ExecuteOrderService", "com.dr.oursp.retail.app.service.PlanWaybillService", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "PlanWaybillPutOnEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/PlanWaybillPutOnEventListener.java"
}, {
    "name": "PlanWaybillTakeDownEvent",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.event.Event", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "PlanWaybillTakeDownEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/PlanWaybillTakeDownEvent.java"
}, {
    "name": "PlanWaybillPutOnEvent",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.event.Event", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "PlanWaybillPutOnEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/PlanWaybillPutOnEvent.java"
}, {
    "name": "PlanWaybillTradeDealEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "PlanWaybillTradeDealEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillTradeDealEventDriver.java"
}, {
    "name": "PlanWaybillBidRejectEvent",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.event.Event", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.Data", "lombok.EqualsAndHashCode"],
    "class_name": "PlanWaybillBidRejectEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillBidRejectEvent.java"
}, {
    "name": "PlanWaybillBidDealEventListener",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.InvoiceService", "com.dr.oursp.retail.app.service.PlanWaybillService", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.support.snapshot.Snapshot", "com.dr.oursp.retail.trade.consts.BidStateEnum", "com.dr.oursp.retail.trade.deal.TradeDeal", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct", "java.time.Instant"],
    "class_name": "PlanWaybillBidDealEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillBidDealEventListener.java"
}, {
    "name": "PlanWaybillBidDealEvent",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.Event", "com.dr.oursp.retail.trade.deal.TradeDeal", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "PlanWaybillBidDealEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillBidDealEvent.java"
}, {
    "name": "PlanWaybillTradeDealEvent",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.Event", "com.dr.oursp.retail.trade.deal.TradeDeal", "lombok.EqualsAndHashCode", "lombok.Value"],
    "class_name": "PlanWaybillTradeDealEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillTradeDealEvent.java"
}, {
    "name": "PlanWaybillBidRejectEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "PlanWaybillBidRejectEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillBidRejectEventDriver.java"
}, {
    "name": "PlanWaybillTradeDealEventListener",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlanWaybillService", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.TradeItemVO", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "PlanWaybillTradeDealEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillTradeDealEventListener.java"
}, {
    "name": "PlanWaybillBidDealEventDriver",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "PlanWaybillBidDealEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillBidDealEventDriver.java"
}, {
    "name": "PlanWaybillBidRejectEventListener",
    "package": "com.dr.oursp.retail.app.service.event.logistics.waybill.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlanWaybillService", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.dr.oursp.retail.trade.TradeItemVO", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct"],
    "class_name": "PlanWaybillBidRejectEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/app/service/event/logistics/waybill/trade/PlanWaybillBidRejectEventListener.java"
}, {
    "name": "CategoryOptionsRepository",
    "package": "com.dr.oursp.retail.category.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.category.entity.CategoryOptionEntity", "com.dr.oursp.strategy.basic.tag.PresetTags", "com.dr.oursp.strategy.basic.tag.TagSystem", "com.dr.oursp.strategy.basic.tag.consts.PresetTagSystemKey", "com.dr.oursp.strategy.basic.tag.consts.TagTypeEnum", "org.apache.logging.log4j.util.Strings", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "CategoryOptionsRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/repository/CategoryOptionsRepository.java"
}, {
    "name": "CategoryRepository",
    "package": "com.dr.oursp.retail.category.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.category.entity.CategoryEntity", "com.dr.oursp.strategy.basic.tag.PresetTags", "com.dr.oursp.strategy.basic.tag.TagSystem", "com.dr.oursp.strategy.basic.tag.consts.PresetTagSystemKey", "com.dr.oursp.strategy.basic.tag.consts.TagTypeEnum", "org.apache.logging.log4j.util.Strings", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "CategoryRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/repository/CategoryRepository.java"
}, {
    "name": "CategoryOptionParam",
    "package": "com.dr.oursp.retail.category.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.support.enums.Enumerations", "com.google.common.collect.Sets", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotEmpty", "java.io.Serializable", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryOptionParam implements Serializable",
    "extend_name": "",
    "implements_name": ["Serializable"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/entity/CategoryOptionParam.java"
}, {
    "name": "CategoryOptionEntity",
    "package": "com.dr.oursp.retail.category.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicTagDocumentEntityWithId", "com.google.common.collect.Lists", "lombok.Data", "lombok.EqualsAndHashCode", "lombok.Setter", "org.apache.logging.log4j.util.Strings", "org.springframework.data.mongodb.core.mapping.Document", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotEmpty", "java.util.List"],
    "class_name": "CategoryOptionEntity extends BasicTagDocumentEntityWithId",
    "extend_name": "BasicTagDocumentEntityWithId",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/entity/CategoryOptionEntity.java"
}, {
    "name": "CategoryEntity",
    "package": "com.dr.oursp.retail.category.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicTagDocumentEntityWithId", "com.google.common.collect.Lists", "lombok.Data", "org.springframework.data.mongodb.core.mapping.Document", "java.util.List"],
    "class_name": "CategoryEntity extends BasicTagDocumentEntityWithId",
    "extend_name": "BasicTagDocumentEntityWithId",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/entity/CategoryEntity.java"
}, {
    "name": "CategoryDefineParam",
    "package": "com.dr.oursp.retail.category.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.support.enums.Enumerations", "com.google.common.collect.Sets", "lombok.Getter", "lombok.Setter", "lombok.experimental.Accessors", "org.apache.commons.lang3.builder.EqualsBuilder", "org.apache.commons.lang3.builder.HashCodeBuilder", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "java.math.BigDecimal", "java.util.LinkedHashSet"],
    "class_name": "CategoryDefineParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/entity/CategoryDefineParam.java"
}, {
    "name": "CategoryOptionVO",
    "package": "com.dr.oursp.retail.category.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.category.entity.CategoryOptionParam", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.support.EnumWrapper", "lombok.Builder", "lombok.Getter", "java.util.List"],
    "class_name": "CategoryOptionVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/domain/CategoryOptionVO.java"
}, {
    "name": "CategoryOption",
    "package": "com.dr.oursp.retail.category.domain",
    "type": "class",
    "imports": ["com.dr.domain.*", "com.dr.oursp.retail.app.api.http.consts.OptionsActionEnum", "com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.category.consts.OptionsStateEnum", "com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.oursp.retail.category.entity.CategoryOptionEntity", "com.dr.oursp.retail.category.entity.CategoryOptionParam", "com.dr.oursp.retail.category.repository.CategoryOptionsRepository", "com.dr.oursp.retail.category.repository.CategoryRepository", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.basic.entity.seed.AutoIncrementSeed", "com.dr.oursp.strategy.basic.tag.consts.PresetTagSystemKey", "com.dr.oursp.strategy.setting.PlatformSetting", "com.google.common.collect.Lists", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.util.Assert", "org.springframework.util.CollectionUtils", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotEmpty", "javax.validation.constraints.NotNull", "java.math.BigDecimal", "java.util.Comparator", "java.util.LinkedHashSet", "java.util.List", "java.util.Objects", "java.util.function.Supplier", "java.util.stream.Collectors", "java.util.stream.Stream"],
    "class_name": "CategoryOption",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/domain/CategoryOption.java"
}, {
    "name": "Category",
    "package": "com.dr.oursp.retail.category.domain",
    "type": "class",
    "imports": ["com.dr.domain.*", "com.dr.oursp.retail.app.api.http.consts.CategoryActionEnum", "com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.category.consts.ParameterTypeEnum", "com.dr.oursp.retail.category.entity.CategoryDefineParam", "com.dr.oursp.retail.category.entity.CategoryEntity", "com.dr.oursp.retail.category.repository.CategoryRepository", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "com.dr.oursp.strategy.basic.entity.seed.AutoIncrementSeed", "com.dr.oursp.strategy.basic.tag.consts.PresetTagSystemKey", "com.dr.oursp.strategy.setting.PlatformSetting", "com.google.common.collect.Lists", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.util.Assert", "org.springframework.util.CollectionUtils", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal", "java.util.*", "java.util.function.Supplier", "java.util.stream.Collectors", "java.util.stream.Stream"],
    "class_name": "Category",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/domain/Category.java"
}, {
    "name": "CategoryVO",
    "package": "com.dr.oursp.retail.category.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.category.entity.CategoryDefineParam", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.support.EnumWrapper", "lombok.Builder", "lombok.Getter", "java.util.List"],
    "class_name": "CategoryVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/domain/CategoryVO.java"
}, {
    "name": "CategoryStateEnum",
    "package": "com.dr.oursp.retail.category.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "CategoryStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/consts/CategoryStateEnum.java"
}, {
    "name": "OptionsStateEnum",
    "package": "com.dr.oursp.retail.category.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "OptionsStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/consts/OptionsStateEnum.java"
}, {
    "name": "ParameterTypeEnum",
    "package": "com.dr.oursp.retail.category.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.retail.category.entity.CategoryDefineParam", "com.dr.oursp.retail.category.entity.CategoryOptionParam", "com.dr.support.enums.KeyValueEnum", "org.springframework.util.Assert", "org.springframework.util.CollectionUtils", "java.util.Objects"],
    "class_name": "ParameterTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/category/consts/ParameterTypeEnum.java"
}, {
    "name": "QualityReportRepository",
    "package": "com.dr.oursp.retail.quality.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.quality.entity.QualityReportEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "QualityReportRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/repository/QualityReportRepository.java"
}, {
    "name": "QualityEntity",
    "package": "com.dr.oursp.retail.quality.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.quality.consts.QualityTypeEnum", "lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "lombok.experimental.Accessors", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Objects"],
    "class_name": "QualityEntity",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/entity/QualityEntity.java"
}, {
    "name": "QualityReportEntity",
    "package": "com.dr.oursp.retail.quality.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "com.google.common.collect.Lists", "com.google.common.collect.Sets", "lombok.Data", "lombok.ToString", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "javax.validation.constraints.Size", "java.util.Arrays", "java.util.LinkedHashSet", "java.util.List", "java.util.Objects", "java.util.stream.Collectors"],
    "class_name": "QualityReportEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/entity/QualityReportEntity.java"
}, {
    "name": "QualityReport",
    "package": "com.dr.oursp.retail.quality.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.quality.repository.QualityReportRepository", "lombok.extern.slf4j.Slf4j"],
    "class_name": "QualityReport",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/domain/QualityReport.java"
}, {
    "name": "Selector",
    "package": "com.dr.oursp.retail.quality.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.entity.QualityReportEntity", "com.dr.oursp.retail.quality.repository.QualityReportRepository", "com.dr.oursp.retail.support.EnumWrapper", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotBlank", "java.util.Comparator", "java.util.stream.Stream"],
    "class_name": "Selector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/domain/Selector.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.quality.domain",
    "type": "class",
    "imports": ["cn.hutool.core.util.NumberUtil", "com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.consts.QualityTypeEnum", "com.dr.oursp.retail.quality.entity.QualityEntity", "com.dr.oursp.retail.quality.entity.QualityReportEntity", "com.dr.oursp.retail.quality.repository.QualityReportRepository", "com.dr.oursp.retail.support.RangeNumber", "com.google.common.collect.Lists", "com.google.common.collect.Sets", "org.apache.logging.log4j.util.Strings", "org.springframework.util.Assert", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Size", "java.math.BigDecimal", "java.util.List", "java.util.Objects"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/domain/Creator.java"
}, {
    "name": "QualityReportVO",
    "package": "com.dr.oursp.retail.quality.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.consts.QualityTypeEnum", "com.dr.oursp.retail.quality.entity.QualityEntity", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "java.util.LinkedHashSet", "java.util.List", "java.util.Optional"],
    "class_name": "QualityReportVO extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/domain/QualityReportVO.java"
}, {
    "name": "QualityTypeEnum",
    "package": "com.dr.oursp.retail.quality.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "QualityTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/consts/QualityTypeEnum.java"
}, {
    "name": "QualityTimeTypeEnum",
    "package": "com.dr.oursp.retail.quality.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "QualityTimeTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/consts/QualityTimeTypeEnum.java"
}, {
    "name": "QualityProvidesNodeEnum",
    "package": "com.dr.oursp.retail.quality.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "QualityProvidesNodeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/quality/consts/QualityProvidesNodeEnum.java"
}, {
    "name": "RetailAppApiUrlConst",
    "package": "com.dr.oursp.retail.globe",
    "type": "class",
    "imports": [],
    "class_name": "RetailAppApiUrlConst",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/RetailAppApiUrlConst.java"
}, {
    "name": "PlatformTypeEnum",
    "package": "com.dr.oursp.retail.globe",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "PlatformTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/PlatformTypeEnum.java"
}, {
    "name": "RedisRetailConfig",
    "package": "com.dr.oursp.retail.globe.config.redis",
    "type": "class",
    "imports": ["com.fasterxml.jackson.annotation.JsonAutoDetect", "com.fasterxml.jackson.annotation.JsonTypeInfo", "com.fasterxml.jackson.annotation.PropertyAccessor", "com.fasterxml.jackson.databind.ObjectMapper", "com.fasterxml.jackson.databind.jsontype.impl.LaissezFaireSubTypeValidator", "org.springframework.beans.factory.annotation.Qualifier", "org.springframework.boot.autoconfigure.data.redis.RedisProperties", "org.springframework.boot.context.properties.ConfigurationProperties", "org.springframework.context.annotation.Bean", "org.springframework.context.annotation.Configuration", "org.springframework.data.redis.connection.RedisConnectionFactory", "org.springframework.data.redis.connection.RedisStandaloneConfiguration", "org.springframework.data.redis.connection.jedis.JedisClientConfiguration", "org.springframework.data.redis.connection.jedis.JedisConnectionFactory", "org.springframework.data.redis.core.RedisTemplate", "org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer", "org.springframework.data.redis.serializer.StringRedisSerializer", "redis.clients.jedis.JedisPoolConfig"],
    "class_name": "RedisRetailConfig",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/redis/RedisRetailConfig.java"
}, {
    "name": "RestApiTokenHandlerFilterForSupplyingApp",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.token.TokenManger", "lombok.extern.slf4j.Slf4j", "java.util.List"],
    "class_name": "RestApiTokenHandlerFilterForSupplyingApp extends RestApiTokenHandlerFilterForRetail",
    "extend_name": "RestApiTokenHandlerFilterForRetail",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RestApiTokenHandlerFilterForSupplyingApp.java"
}, {
    "name": "RestApiTokenHandlerFilterForOutInter",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.api.RestApiTokenHandlerFilterForAdmin", "com.dr.oursp.strategy.basic.token.TokenManger", "lombok.extern.slf4j.Slf4j", "javax.servlet.Filter"],
    "class_name": "RestApiTokenHandlerFilterForOutInter extends RestApiTokenHandlerFilterForAdmin implements Filter",
    "extend_name": "RestApiTokenHandlerFilterForAdmin",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RestApiTokenHandlerFilterForOutInter.java"
}, {
    "name": "RestApiTokenHandlerFilterForRetail",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.api.RestApiTokenHandlerFilter", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "com.dr.oursp.strategy.basic.token.TokenException", "com.dr.oursp.strategy.basic.token.TokenManger", "org.apache.logging.log4j.util.Strings", "java.util.List"],
    "class_name": "RestApiTokenHandlerFilterForRetail extends RestApiTokenHandlerFilter",
    "extend_name": "RestApiTokenHandlerFilter",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RestApiTokenHandlerFilterForRetail.java"
}, {
    "name": "RestApiTokenHandlerFilterForSellingApp",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.token.TokenManger", "lombok.extern.slf4j.Slf4j", "java.util.List"],
    "class_name": "RestApiTokenHandlerFilterForSellingApp extends RestApiTokenHandlerFilterForRetail",
    "extend_name": "RestApiTokenHandlerFilterForRetail",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RestApiTokenHandlerFilterForSellingApp.java"
}, {
    "name": "RestApiTokenHandlerFilterForConveyingApp",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.token.TokenManger", "lombok.extern.slf4j.Slf4j", "java.util.List"],
    "class_name": "RestApiTokenHandlerFilterForConveyingApp extends RestApiTokenHandlerFilterForRetail",
    "extend_name": "RestApiTokenHandlerFilterForRetail",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RestApiTokenHandlerFilterForConveyingApp.java"
}, {
    "name": "RetailCurrentUser",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "java.util.Collections", "java.util.EnumSet", "java.util.List", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "RetailCurrentUser extends CurrentUser",
    "extend_name": "CurrentUser",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RetailCurrentUser.java"
}, {
    "name": "RestApiTokenHandlerFilterForPurchasingApp",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.token.TokenManger", "lombok.extern.slf4j.Slf4j", "java.util.List"],
    "class_name": "RestApiTokenHandlerFilterForPurchasingApp extends RestApiTokenHandlerFilterForRetail",
    "extend_name": "RestApiTokenHandlerFilterForRetail",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RestApiTokenHandlerFilterForPurchasingApp.java"
}, {
    "name": "RetailTokenConfig",
    "package": "com.dr.oursp.retail.globe.config.web",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.strategy.basic.token.TokenManger", "com.google.common.collect.Lists", "org.springframework.boot.web.servlet.FilterRegistrationBean", "org.springframework.context.annotation.Bean", "org.springframework.context.annotation.Configuration"],
    "class_name": "RetailTokenConfig",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/web/RetailTokenConfig.java"
}, {
    "name": "RetailConfig",
    "package": "com.dr.oursp.retail.globe.config.jpa",
    "type": "class",
    "imports": ["org.springframework.boot.context.properties.ConfigurationProperties", "org.springframework.boot.jdbc.DataSourceBuilder", "org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder", "org.springframework.boot.orm.jpa.hibernate.SpringImplicitNamingStrategy", "org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy", "org.springframework.context.annotation.Bean", "org.springframework.context.annotation.Configuration", "org.springframework.data.jpa.repository.config.EnableJpaRepositories", "org.springframework.orm.jpa.JpaTransactionManager", "org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean", "org.springframework.transaction.PlatformTransactionManager", "org.springframework.transaction.annotation.EnableTransactionManagement", "javax.persistence.EntityManager", "javax.sql.DataSource", "java.util.HashMap", "java.util.Map"],
    "class_name": "RetailConfig",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/jpa/RetailConfig.java"
}, {
    "name": "MongoRetailConfig",
    "package": "com.dr.oursp.retail.globe.config.mongo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.EnumWrapper", "com.dr.support.BeanScanner", "com.dr.support.enums.Enumerations", "com.dr.support.enums.KeyValueEnum", "com.google.common.collect.Lists", "com.google.common.collect.Maps", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.bson.BsonDocument", "org.bson.BsonInt32", "org.bson.BsonString", "org.bson.BsonValue", "org.springframework.beans.factory.annotation.Qualifier", "org.springframework.beans.factory.config.BeanDefinition", "org.springframework.boot.autoconfigure.mongo.MongoProperties", "org.springframework.boot.context.properties.ConfigurationProperties", "org.springframework.context.annotation.Bean", "org.springframework.context.annotation.Configuration", "org.springframework.core.convert.converter.Converter", "org.springframework.data.convert.ReadingConverter", "org.springframework.data.convert.WritingConverter", "org.springframework.data.mongodb.MongoDatabaseFactory", "org.springframework.data.mongodb.MongoTransactionManager", "org.springframework.data.mongodb.core.MongoTemplate", "org.springframework.data.mongodb.core.SimpleMongoClientDatabaseFactory", "org.springframework.data.mongodb.core.convert.DefaultDbRefResolver", "org.springframework.data.mongodb.core.convert.MappingMongoConverter", "org.springframework.data.mongodb.core.convert.MongoCustomConversions", "org.springframework.data.mongodb.core.mapping.MongoMappingContext", "org.springframework.data.mongodb.repository.config.EnableMongoRepositories", "org.springframework.util.Assert", "javax.annotation.PostConstruct", "java.util.List", "java.util.Map", "java.util.Set"],
    "class_name": "MongoRetailConfig",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/mongo/MongoRetailConfig.java"
}, {
    "name": "RetailWebSocketConfig",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.RetailAppApiUrlConst", "org.springframework.context.annotation.Configuration", "org.springframework.web.socket.config.annotation.EnableWebSocket", "org.springframework.web.socket.config.annotation.WebSocketConfigurer", "org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry", "org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor"],
    "class_name": "RetailWebSocketConfig implements WebSocketConfigurer",
    "extend_name": "",
    "implements_name": ["WebSocketConfigurer"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/RetailWebSocketConfig.java"
}, {
    "name": "DefaultWsExceptionResponse",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "class",
    "imports": ["lombok.Builder", "lombok.Data"],
    "class_name": "DefaultWsExceptionResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/DefaultWsExceptionResponse.java"
}, {
    "name": "AbstractWsResponse",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "abstract class",
    "imports": ["lombok.experimental.SuperBuilder"],
    "class_name": "AbstractWsResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/AbstractWsResponse.java"
}, {
    "name": "DefaultWsRequest",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "class",
    "imports": [],
    "class_name": "DefaultWsRequest extends AbstractWsRequest",
    "extend_name": "AbstractWsRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/DefaultWsRequest.java"
}, {
    "name": "ConveyingWebSocketHandlerDispatch",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.globe.config.web.RetailCurrentUser", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "com.dr.oursp.strategy.basic.token.TokenException", "com.dr.oursp.strategy.basic.token.TokenManger", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Component", "java.util.List"],
    "class_name": "ConveyingWebSocketHandlerDispatch extends AbstractWebSocketHandlerDispatch",
    "extend_name": "AbstractWebSocketHandlerDispatch",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/ConveyingWebSocketHandlerDispatch.java"
}, {
    "name": "BuyerWebSocketHandlerDispatch",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.globe.config.web.RetailCurrentUser", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "com.dr.oursp.strategy.basic.token.TokenException", "com.dr.oursp.strategy.basic.token.TokenManger", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Component", "java.util.List"],
    "class_name": "BuyerWebSocketHandlerDispatch extends AbstractWebSocketHandlerDispatch",
    "extend_name": "AbstractWebSocketHandlerDispatch",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/BuyerWebSocketHandlerDispatch.java"
}, {
    "name": "AbstractWebSocketHandlerDispatch",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "abstract class",
    "imports": ["com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.token.TokenException", "com.dr.support.serialization.Serializations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "com.google.common.base.Throwables", "com.google.common.collect.Maps", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.util.Assert", "org.springframework.web.socket.CloseStatus", "org.springframework.web.socket.PongMessage", "org.springframework.web.socket.TextMessage", "org.springframework.web.socket.WebSocketSession", "org.springframework.web.socket.handler.TextWebSocketHandler", "java.io.IOException", "java.util.Map"],
    "class_name": "AbstractWebSocketHandlerDispatch extends TextWebSocketHandler",
    "extend_name": "TextWebSocketHandler",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/AbstractWebSocketHandlerDispatch.java"
}, {
    "name": "AbstractWsRequest",
    "package": "com.dr.oursp.retail.globe.config.ws",
    "type": "abstract class",
    "imports": ["lombok.Data"],
    "class_name": "AbstractWsRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/config/ws/AbstractWsRequest.java"
}, {
    "name": "RedisLockConfig",
    "package": "com.dr.oursp.retail.globe.lock",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.Idempotent.RedisLocker", "org.springframework.context.annotation.Bean", "org.springframework.context.annotation.Configuration", "org.springframework.data.redis.core.RedisTemplate"],
    "class_name": "RedisLockConfig",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/globe/lock/RedisLockConfig.java"
}, {
    "name": "TradeItem",
    "package": "com.dr.oursp.retail.trade",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.consts.TradeRuleDefinition", "com.dr.oursp.retail.support.snapshot.Snapshot"],
    "class_name": "TradeItem",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/TradeItem.java"
}, {
    "name": "TradeItemVO",
    "package": "com.dr.oursp.retail.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeRuleVo", "com.dr.oursp.retail.support.snapshot.Snapshot", "lombok.Data"],
    "class_name": "TradeItemVO implements TradeItem",
    "extend_name": "",
    "implements_name": ["TradeItem"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/TradeItemVO.java"
}, {
    "name": "TradeItemFactory",
    "package": "com.dr.oursp.retail.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.consts.TradeRuleDefinition", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.snapshot.Snapshot"],
    "class_name": "TradeItemFactory",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/TradeItemFactory.java"
}, {
    "name": "Trade",
    "package": "com.dr.oursp.retail.trade",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.trade.module.prepare.TradeSignUp", "com.dr.oursp.retail.trade.module.session.TradeSession", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "com.dr.oursp.retail.trade.player.behavior.TradePrepare", "javax.validation.constraints.NotNull"],
    "class_name": "Trade",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/Trade.java"
}, {
    "name": "AbstractTradeItem",
    "package": "com.dr.oursp.retail.trade",
    "type": "abstract class",
    "imports": [],
    "class_name": "AbstractTradeItem implements TradeItem",
    "extend_name": "",
    "implements_name": ["TradeItem"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/AbstractTradeItem.java"
}, {
    "name": "TradeDeal",
    "package": "com.dr.oursp.retail.trade.deal",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.Data", "java.util.function.Consumer"],
    "class_name": "TradeDeal",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/deal/TradeDeal.java"
}, {
    "name": "AbstractTradeDeal",
    "package": "com.dr.oursp.retail.trade.deal",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.trade.consts.BidStateEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.AccessLevel", "lombok.Getter", "lombok.Setter", "java.util.List", "java.util.Objects", "java.util.function.Consumer"],
    "class_name": "AbstractTradeDeal implements TradeDeal",
    "extend_name": "",
    "implements_name": ["TradeDeal"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/deal/AbstractTradeDeal.java"
}, {
    "name": "TradeDealBuilder",
    "package": "com.dr.oursp.retail.trade.deal",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.Data", "lombok.extern.slf4j.Slf4j", "org.springframework.util.CollectionUtils", "java.util.List", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "TradeDealBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/deal/TradeDealBuilder.java"
}, {
    "name": "PayMarginChecker",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.consts.TradeRuleDefinition", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.TradeMarginBidStateEnum", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.List"],
    "class_name": "PayMarginChecker extends TradeChecker.AbstractChecker",
    "extend_name": "TradeChecker.AbstractChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/PayMarginChecker.java"
}, {
    "name": "TradeItemCheck",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.TradeItem", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.time.Instant", "java.util.function.Predicate"],
    "class_name": "TradeItemCheck extends TradeChecker.AbstractChecker",
    "extend_name": "TradeChecker.AbstractChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/TradeItemCheck.java"
}, {
    "name": "BidMarginChecker",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.consts.TradeRuleDefinition", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.TradeMarginBidStateEnum", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.List"],
    "class_name": "BidMarginChecker extends TradeChecker.AbstractChecker",
    "extend_name": "TradeChecker.AbstractChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/BidMarginChecker.java"
}, {
    "name": "TradeChecker",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.google.common.collect.Lists", "lombok.Getter", "lombok.ToString", "java.util.List", "java.util.function.BooleanSupplier"],
    "class_name": "TradeChecker",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/TradeChecker.java"
}, {
    "name": "BidChecker",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.consts.TradeRuleDefinition", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.TradeItem", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Optional"],
    "class_name": "BidChecker extends TradeChecker.AbstractChecker",
    "extend_name": "TradeChecker.AbstractChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/BidChecker.java"
}, {
    "name": "BidConfirmChecker",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.consts.TradeRuleDefinition", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "lombok.Setter", "javax.validation.Valid", "javax.validation.constraints.NotNull"],
    "class_name": "BidConfirmChecker extends TradeChecker.AbstractChecker",
    "extend_name": "TradeChecker.AbstractChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/BidConfirmChecker.java"
}, {
    "name": "TradePlayerCheck",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.trade.TradeItem", "javax.validation.Valid", "javax.validation.constraints.NotNull"],
    "class_name": "TradePlayerCheck extends TradeChecker.AbstractChecker",
    "extend_name": "TradeChecker.AbstractChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/TradePlayerCheck.java"
}, {
    "name": "CheckPredicate",
    "package": "com.dr.oursp.retail.trade.checker",
    "type": "class",
    "imports": ["lombok.Data", "java.util.function.BooleanSupplier"],
    "class_name": "CheckPredicate",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/checker/CheckPredicate.java"
}, {
    "name": "ITradeBidRecordDefinition",
    "package": "com.dr.oursp.retail.trade.module",
    "type": "interface",
    "imports": [],
    "class_name": "ITradeBidRecordDefinition",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/ITradeBidRecordDefinition.java"
}, {
    "name": "ITradeSessionDefinition",
    "package": "com.dr.oursp.retail.trade.module",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.trade.TradeItem"],
    "class_name": "ITradeSessionDefinition",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/ITradeSessionDefinition.java"
}, {
    "name": "TradeSignUp",
    "package": "com.dr.oursp.retail.trade.module.prepare",
    "type": "class",
    "imports": ["com.dr.oursp.retail.trade.module.prepare.domain.TradeSignUpEntity", "com.dr.oursp.retail.trade.module.prepare.domain.TradeSignUpRepository", "lombok.Data", "lombok.extern.slf4j.Slf4j", "java.util.List", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "TradeSignUp",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/prepare/TradeSignUp.java"
}, {
    "name": "TradeSignUpBuilder",
    "package": "com.dr.oursp.retail.trade.module.prepare",
    "type": "class",
    "imports": ["com.dr.oursp.retail.trade.module.prepare.domain.TradeSignUpRepository", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "TradeSignUpBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/prepare/TradeSignUpBuilder.java"
}, {
    "name": "TradeSignUpVO",
    "package": "com.dr.oursp.retail.trade.module.prepare",
    "type": "class",
    "imports": ["com.dr.oursp.retail.trade.module.prepare.domain.TradeSignUpEntity", "lombok.Builder", "lombok.Data", "org.springframework.data.annotation.Id", "javax.validation.constraints.NotBlank"],
    "class_name": "TradeSignUpVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/prepare/TradeSignUpVO.java"
}, {
    "name": "TradeSignUpRepository",
    "package": "com.dr.oursp.retail.trade.module.prepare.domain",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.List", "java.util.Optional"],
    "class_name": "TradeSignUpRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/prepare/domain/TradeSignUpRepository.java"
}, {
    "name": "TradeSignUpEntity",
    "package": "com.dr.oursp.retail.trade.module.prepare.domain",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Builder", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "TradeSignUpEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/prepare/domain/TradeSignUpEntity.java"
}, {
    "name": "TradeBidRecord",
    "package": "com.dr.oursp.retail.trade.module.bid",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.BidStateEnum", "com.dr.oursp.retail.trade.module.bid.domain.AnySelector", "com.dr.oursp.retail.trade.module.bid.domain.SingleSelector", "com.dr.oursp.retail.trade.module.bid.domain.entity.TradeBidRecordEntity", "com.dr.oursp.retail.trade.module.bid.domain.repository.TradeBidRecordRepository", "lombok.AccessLevel", "lombok.Setter", "lombok.ToString", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "java.util.Comparator", "java.util.List", "java.util.Optional", "java.util.function.Function", "java.util.stream.Collectors"],
    "class_name": "TradeBidRecord",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/TradeBidRecord.java"
}, {
    "name": "TradeBidRecordBuilder",
    "package": "com.dr.oursp.retail.trade.module.bid",
    "type": "class",
    "imports": ["com.dr.oursp.retail.trade.module.bid.domain.repository.TradeBidRecordRepository", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "TradeBidRecordBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/TradeBidRecordBuilder.java"
}, {
    "name": "TradeBidRecordVo",
    "package": "com.dr.oursp.retail.trade.module.bid",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.trade.consts.BidRejectTypeEnum", "com.dr.oursp.retail.trade.consts.BidStateEnum", "com.dr.oursp.retail.trade.module.ITradeBidRecordDefinition", "com.dr.oursp.retail.trade.module.bid.domain.entity.TradeBidRecordEntity", "lombok.Builder", "lombok.Data", "javax.validation.Valid", "javax.validation.constraints.NotBlank"],
    "class_name": "TradeBidRecordVo implements ITradeBidRecordDefinition",
    "extend_name": "",
    "implements_name": ["ITradeBidRecordDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/TradeBidRecordVo.java"
}, {
    "name": "TradeBidRecordModifier",
    "package": "com.dr.oursp.retail.trade.module.bid.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.checker.BidConfirmChecker", "com.dr.oursp.retail.trade.consts.BidRejectTypeEnum", "com.dr.oursp.retail.trade.consts.BidStateEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.bid.domain.entity.TradeBidRecordEntity", "com.dr.oursp.retail.trade.module.bid.domain.repository.TradeBidRecordRepository", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotNull", "java.util.function.Supplier"],
    "class_name": "TradeBidRecordModifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/domain/TradeBidRecordModifier.java"
}, {
    "name": "SingleSelector",
    "package": "com.dr.oursp.retail.trade.module.bid.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.bid.domain.entity.TradeBidRecordEntity", "com.dr.oursp.retail.trade.module.bid.domain.repository.TradeBidRecordRepository"],
    "class_name": "SingleSelector extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/domain/SingleSelector.java"
}, {
    "name": "AnySelector",
    "package": "com.dr.oursp.retail.trade.module.bid.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.trade.consts.BidStateEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.bid.domain.entity.TradeBidRecordEntity", "com.dr.oursp.retail.trade.module.bid.domain.repository.TradeBidRecordRepository", "java.util.Comparator", "java.util.List", "java.util.stream.Collectors", "java.util.stream.Stream"],
    "class_name": "AnySelector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/domain/AnySelector.java"
}, {
    "name": "Bid",
    "package": "com.dr.oursp.retail.trade.module.bid.domain.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.trade.module.bid.domain.entity.TradeBidRecordEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.List", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "Bid record repository.",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/domain/repository/TradeBidRecordRepository.java"
}, {
    "name": "TradeBidRecordEntity",
    "package": "com.dr.oursp.retail.trade.module.bid.domain.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Builder", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.mongodb.core.mapping.Document", "javax.persistence.Id", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "TradeBidRecordEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/bid/domain/entity/TradeBidRecordEntity.java"
}, {
    "name": "TradeMarginBuilder",
    "package": "com.dr.oursp.retail.trade.module.margin",
    "type": "class",
    "imports": ["com.dr.oursp.retail.trade.module.margin.domain.TradeMarginRepository"],
    "class_name": "TradeMarginBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/margin/TradeMarginBuilder.java"
}, {
    "name": "TradeMarginVO",
    "package": "com.dr.oursp.retail.trade.module.margin",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.consts.TradeMarginBidStateEnum", "com.dr.oursp.retail.trade.consts.TradeMarginStateEnum", "com.dr.oursp.retail.trade.module.margin.domain.TradeMarginEntity", "lombok.AccessLevel", "lombok.Builder", "lombok.Data"],
    "class_name": "TradeMarginVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/margin/TradeMarginVO.java"
}, {
    "name": "TradeMargin",
    "package": "com.dr.oursp.retail.trade.module.margin",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetailBuilder", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetailByBidMargin", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.consts.TradeMarginBidStateEnum", "com.dr.oursp.retail.trade.consts.TradeMarginStateEnum", "com.dr.oursp.retail.trade.module.ITradeSessionDefinition", "com.dr.oursp.retail.trade.module.margin.domain.TradeMarginEntity", "com.dr.oursp.retail.trade.module.margin.domain.TradeMarginRepository", "com.dr.support.enums.Enumerations", "com.dr.support.hash.Hashing", "lombok.Builder", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "org.springframework.util.Assert", "javax.validation.Valid", "javax.validation.constraints.NotNull", "javax.validation.constraints.Positive", "java.io.IOException", "java.nio.charset.StandardCharsets", "java.util.List", "java.util.Optional", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "TradeMargin",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/margin/TradeMargin.java"
}, {
    "name": "TradeMarginEntity",
    "package": "com.dr.oursp.retail.trade.module.margin.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Builder", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "TradeMarginEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/margin/domain/TradeMarginEntity.java"
}, {
    "name": "TradeMarginRepository",
    "package": "com.dr.oursp.retail.trade.module.margin.domain",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.List", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "TradeMarginRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/margin/domain/TradeMarginRepository.java"
}, {
    "name": "TradeSessionCheckFunction",
    "package": "com.dr.oursp.retail.trade.module.session",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.trade.consts.TradeCheckException"],
    "class_name": "TradeSessionCheckFunction",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/TradeSessionCheckFunction.java"
}, {
    "name": "TradeSessionVo",
    "package": "com.dr.oursp.retail.trade.module.session",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.TradeItemVO", "com.dr.oursp.retail.trade.consts.TradeStateEnum", "com.dr.oursp.retail.trade.module.ITradeSessionDefinition", "com.dr.oursp.retail.trade.module.session.domain.entity.TradeSessionEntity", "lombok.Builder", "lombok.Getter", "lombok.ToString"],
    "class_name": "TradeSessionVo implements ITradeSessionDefinition",
    "extend_name": "",
    "implements_name": ["ITradeSessionDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/TradeSessionVo.java"
}, {
    "name": "TradeSessionBuilder",
    "package": "com.dr.oursp.retail.trade.module.session",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.order.repository.CommodityOrderRepository", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.module.session.domain.entity.TradeSessionEntity", "com.dr.oursp.retail.trade.module.session.domain.repository.TradeSessionRepository", "com.dr.oursp.strategy.setting.PlatformSetting", "javax.validation.constraints.NotNull"],
    "class_name": "TradeSessionBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/TradeSessionBuilder.java"
}, {
    "name": "TradeSession",
    "package": "com.dr.oursp.retail.trade.module.session",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.commodity.order.repository.CommodityOrderRepository", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.consts.TradeStateEnum", "com.dr.oursp.retail.trade.module.session.domain.TradeSessionCreator", "com.dr.oursp.retail.trade.module.session.domain.TradeSessionModifier", "com.dr.oursp.retail.trade.module.session.domain.entity.TradeSessionEntity", "com.dr.oursp.retail.trade.module.session.domain.repository.TradeSessionRepository", "com.dr.oursp.strategy.setting.PlatformSetting", "lombok.AccessLevel", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.Optional"],
    "class_name": "TradeSession",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/TradeSession.java"
}, {
    "name": "TradeSessionCreator",
    "package": "com.dr.oursp.retail.trade.module.session.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.TradeStateEnum", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "com.dr.oursp.retail.trade.module.session.domain.entity.TradeSessionEntity", "org.springframework.validation.annotation.Validated", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "TradeSessionCreator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/domain/TradeSessionCreator.java"
}, {
    "name": "TradeSessionModifier",
    "package": "com.dr.oursp.retail.trade.module.session.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.consts.TradeStateEnum", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "com.dr.oursp.retail.trade.module.session.domain.entity.TradeSessionEntity", "org.springframework.validation.annotation.Validated", "javax.validation.constraints.NotNull", "java.util.function.Supplier"],
    "class_name": "TradeSessionModifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/domain/TradeSessionModifier.java"
}, {
    "name": "Trade",
    "package": "com.dr.oursp.retail.trade.module.session.domain.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.trade.module.session.domain.entity.TradeSessionEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional"],
    "class_name": "Trade repository.",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/domain/repository/TradeSessionRepository.java"
}, {
    "name": "TradeSessionEntity",
    "package": "com.dr.oursp.retail.trade.module.session.domain.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.rule.CommodityRuleVo", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.mongodb.core.mapping.Document", "java.math.BigDecimal"],
    "class_name": "TradeSessionEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/module/session/domain/entity/TradeSessionEntity.java"
}, {
    "name": "TradeMarginStateEnum",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "TradeMarginStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/TradeMarginStateEnum.java"
}, {
    "name": "DeliveryMarginScopeEnum",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "DeliveryMarginScopeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/DeliveryMarginScopeEnum.java"
}, {
    "name": "DealModeEnum",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "DealModeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/DealModeEnum.java"
}, {
    "name": "BidRejectTypeEnum",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "BidRejectTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/BidRejectTypeEnum.java"
}, {
    "name": "BidStateEnum",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "BidStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/BidStateEnum.java"
}, {
    "name": "TradeStateEnum",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "TradeStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/TradeStateEnum.java"
}, {
    "name": "TradeMarginBidStateEnum",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "TradeMarginBidStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/TradeMarginBidStateEnum.java"
}, {
    "name": "TradeCheckException",
    "package": "com.dr.oursp.retail.trade.consts",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.CheckException"],
    "class_name": "TradeCheckException extends CheckException",
    "extend_name": "CheckException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/consts/TradeCheckException.java"
}, {
    "name": "Buyer",
    "package": "com.dr.oursp.retail.trade.player",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.margin.TradeMargin", "com.dr.oursp.retail.trade.module.session.TradeSession", "com.dr.oursp.retail.trade.player.behavior.BidMargin", "com.dr.oursp.retail.trade.player.behavior.BidRecord", "com.dr.oursp.retail.trade.player.behavior.Pay", "lombok.AccessLevel", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "java.util.function.Function"],
    "class_name": "Buyer extends AbstractTradePlayer",
    "extend_name": "AbstractTradePlayer",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/Buyer.java"
}, {
    "name": "TradePlayerBuilder",
    "package": "com.dr.oursp.retail.trade.player",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.vo.RetailPlayerVo"],
    "class_name": "TradePlayerBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/TradePlayerBuilder.java"
}, {
    "name": "AbstractTradePlayer",
    "package": "com.dr.oursp.retail.trade.player",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.trade.module.session.TradeSession", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.AccessLevel", "lombok.Getter"],
    "class_name": "AbstractTradePlayer",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/AbstractTradePlayer.java"
}, {
    "name": "BuyerBuilder",
    "package": "com.dr.oursp.retail.trade.player",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.margin.TradeMargin", "com.dr.oursp.retail.trade.module.session.TradeSession", "lombok.Data", "lombok.experimental.Accessors", "java.util.function.Function"],
    "class_name": "BuyerBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/BuyerBuilder.java"
}, {
    "name": "Seller",
    "package": "com.dr.oursp.retail.trade.player",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.margin.TradeMargin", "com.dr.oursp.retail.trade.module.session.TradeSession", "com.dr.oursp.retail.trade.player.behavior.Bid", "com.dr.oursp.retail.trade.player.behavior.BidMargin", "lombok.AccessLevel", "lombok.Getter"],
    "class_name": "Seller extends AbstractTradePlayer",
    "extend_name": "AbstractTradePlayer",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/Seller.java"
}, {
    "name": "SellerBuilder",
    "package": "com.dr.oursp.retail.trade.player",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.margin.TradeMargin", "com.dr.oursp.retail.trade.module.session.TradeSession"],
    "class_name": "SellerBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/SellerBuilder.java"
}, {
    "name": "TradePlayer",
    "package": "com.dr.oursp.retail.trade.player",
    "type": "interface",
    "imports": [],
    "class_name": "TradePlayer",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/TradePlayer.java"
}, {
    "name": "BidMargin",
    "package": "com.dr.oursp.retail.trade.player.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.margin.TradeMargin", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.retail.trade.module.session.TradeSession", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "java.io.IOException", "java.util.List", "java.util.Optional"],
    "class_name": "BidMargin",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/behavior/BidMargin.java"
}, {
    "name": "Bid",
    "package": "com.dr.oursp.retail.trade.player.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.consts.BidRejectTypeEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.bid.domain.TradeBidRecordModifier", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank"],
    "class_name": "Bid",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/behavior/Bid.java"
}, {
    "name": "BidRecord",
    "package": "com.dr.oursp.retail.trade.player.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.session.TradeSession", "lombok.Getter", "java.util.Comparator", "java.util.List", "java.util.Optional", "java.util.function.Function", "java.util.stream.Collectors"],
    "class_name": "BidRecord",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/behavior/BidRecord.java"
}, {
    "name": "Pay",
    "package": "com.dr.oursp.retail.trade.player.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.player.RetailPlayer", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.rule.CheckEvent", "com.dr.oursp.retail.trade.TradeItem", "com.dr.oursp.retail.trade.checker.BidChecker", "com.dr.oursp.retail.trade.checker.BidMarginChecker", "com.dr.oursp.retail.trade.checker.PayMarginChecker", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.dr.oursp.retail.trade.consts.TradeCheckException", "com.dr.oursp.retail.trade.consts.TradeMarginBidStateEnum", "com.dr.oursp.retail.trade.module.bid.TradeBidRecord", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.retail.trade.module.margin.TradeMargin", "com.dr.oursp.retail.trade.module.margin.TradeMarginVO", "com.dr.oursp.retail.trade.module.margin.domain.TradeMarginEntity", "com.dr.oursp.retail.trade.module.session.TradeSession", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.Data", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.transaction.annotation.Transactional", "org.springframework.util.Assert", "javax.validation.constraints.NotNull", "javax.validation.constraints.Positive", "java.io.IOException", "java.util.List", "java.util.Optional", "java.util.function.BiPredicate", "java.util.function.Supplier", "java.util.stream.Collectors"],
    "class_name": "Pay",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/behavior/Pay.java"
}, {
    "name": "TradePrepare",
    "package": "com.dr.oursp.retail.trade.player.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.trade.module.prepare.TradeSignUp", "com.dr.oursp.retail.trade.module.prepare.TradeSignUpVO", "com.dr.oursp.retail.trade.module.session.TradeSessionVo", "lombok.Getter", "java.util.Optional"],
    "class_name": "TradePrepare",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/trade/player/behavior/TradePrepare.java"
}, {
    "name": "CommodityOrderEntity",
    "package": "com.dr.oursp.retail.commodity.order.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "CommodityOrderEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/order/repository/CommodityOrderEntity.java"
}, {
    "name": "CommodityOrderRepository",
    "package": "com.dr.oursp.retail.commodity.order.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "CommodityOrderRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/order/repository/CommodityOrderRepository.java"
}, {
    "name": "CommodityOrderVO",
    "package": "com.dr.oursp.retail.commodity.order.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.consts.CommodityOrderStateEnum", "com.dr.oursp.retail.commodity.order.repository.CommodityOrderEntity", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.trade.consts.BidStateEnum", "lombok.AccessLevel", "lombok.Builder", "lombok.Data"],
    "class_name": "CommodityOrderVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/order/domain/CommodityOrderVO.java"
}, {
    "name": "CommodityOrder",
    "package": "com.dr.oursp.retail.commodity.order.domain",
    "type": "class",
    "imports": ["com.dr.domain.*", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.order.consts.CommodityOrderStateEnum", "com.dr.oursp.retail.commodity.order.repository.CommodityOrderEntity", "com.dr.oursp.retail.commodity.order.repository.CommodityOrderRepository", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.strategy.setting.PlatformSetting", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.Comparator", "java.util.Objects", "java.util.function.Supplier", "java.util.stream.Stream"],
    "class_name": "CommodityOrder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/order/domain/CommodityOrder.java"
}, {
    "name": "CommodityOrderStateEnum",
    "package": "com.dr.oursp.retail.commodity.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "CommodityOrderStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/order/consts/CommodityOrderStateEnum.java"
}, {
    "name": "CoalSupplyBehaviorContext",
    "package": "com.dr.oursp.retail.commodity.supply.coal.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.domain.SupplyModifier", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "org.springframework.data.repository.CrudRepository", "java.util.function.Supplier"],
    "class_name": "CoalSupplyBehaviorContext extends SupplyModifier",
    "extend_name": "SupplyModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/behavior/CoalSupplyBehaviorContext.java"
}, {
    "name": "BasicCoalSupplyBehavior",
    "package": "com.dr.oursp.retail.commodity.supply.coal.behavior",
    "type": "class",
    "imports": ["com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleChecker", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.oursp.strategy.basic.identity.entity.IdentityEntity", "com.dr.oursp.strategy.basic.token.Current", "lombok.extern.slf4j.Slf4j", "org.springframework.util.Assert", "javax.validation.constraints.NotNull", "java.time.Instant", "java.util.function.Consumer", "java.util.function.Predicate"],
    "class_name": "BasicCoalSupplyBehavior implements CoalSupplyBehavior",
    "extend_name": "",
    "implements_name": ["CoalSupplyBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/behavior/BasicCoalSupplyBehavior.java"
}, {
    "name": "CoalSupplyModifiableProperties",
    "package": "com.dr.oursp.retail.commodity.supply.coal.behavior",
    "type": "interface",
    "imports": ["com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleVO", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "javax.validation.constraints.NotNull", "java.util.Set"],
    "class_name": "CoalSupplyModifiableProperties",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/behavior/CoalSupplyModifiableProperties.java"
}, {
    "name": "CoalSupplyModifiablePropertiesImpl",
    "package": "com.dr.oursp.retail.commodity.supply.coal.behavior",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleVO", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.google.common.collect.Lists", "lombok.extern.slf4j.Slf4j", "org.springframework.util.CollectionUtils", "javax.validation.constraints.NotNull", "java.util.List", "java.util.Set", "java.util.function.Consumer"],
    "class_name": "CoalSupplyModifiablePropertiesImpl implements CoalSupplyModifiableProperties",
    "extend_name": "",
    "implements_name": ["CoalSupplyModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/behavior/CoalSupplyModifiablePropertiesImpl.java"
}, {
    "name": "CoalSupplyBehavior",
    "package": "com.dr.oursp.retail.commodity.supply.coal.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.commodity.coal.behavior.SnapshotBehavior", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "CoalSupplyBehavior extends SnapshotBehavior",
    "extend_name": "SnapshotBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/behavior/CoalSupplyBehavior.java"
}, {
    "name": "SupplyRepository",
    "package": "com.dr.oursp.retail.commodity.supply.coal.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "SupplyRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/repository/SupplyRepository.java"
}, {
    "name": "TradeRuleEntity",
    "package": "com.dr.oursp.retail.commodity.supply.coal.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "lombok.Data", "lombok.experimental.Accessors", "java.util.Set"],
    "class_name": "TradeRuleEntity",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/entity/TradeRuleEntity.java"
}, {
    "name": "SupplyEntity",
    "package": "com.dr.oursp.retail.commodity.supply.coal.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "com.google.common.collect.Sets", "lombok.Data", "lombok.ToString", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.util.Set"],
    "class_name": "SupplyEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/entity/SupplyEntity.java"
}, {
    "name": "CoalSupplyReleaseState",
    "package": "com.dr.oursp.retail.commodity.supply.coal.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyBehavior", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyModifier", "com.dr.oursp.retail.support.AccurateNumber", "lombok.extern.slf4j.Slf4j"],
    "class_name": "CoalSupplyReleaseState extends CoalSupplyBehaviorState",
    "extend_name": "CoalSupplyBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/state/CoalSupplyReleaseState.java"
}, {
    "name": "CoalSupplyBehaviorState",
    "package": "com.dr.oursp.retail.commodity.supply.coal.state",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyBehavior", "com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyModifiableProperties", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyModifier", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "CoalSupplyBehaviorState implements CoalSupplyBehavior",
    "extend_name": "",
    "implements_name": ["CoalSupplyBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/state/CoalSupplyBehaviorState.java"
}, {
    "name": "CoalSupplyDraftState",
    "package": "com.dr.oursp.retail.commodity.supply.coal.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyBehavior", "com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyModifiableProperties", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyModifier", "com.dr.oursp.retail.support.AccurateNumber", "lombok.extern.slf4j.Slf4j"],
    "class_name": "CoalSupplyDraftState extends CoalSupplyBehaviorState",
    "extend_name": "CoalSupplyBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/state/CoalSupplyDraftState.java"
}, {
    "name": "CoalSupplyUnReleaseState",
    "package": "com.dr.oursp.retail.commodity.supply.coal.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyBehavior", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyModifier", "com.dr.oursp.retail.support.AccurateNumber", "lombok.extern.slf4j.Slf4j"],
    "class_name": "CoalSupplyUnReleaseState extends CoalSupplyBehaviorState",
    "extend_name": "CoalSupplyBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/state/CoalSupplyUnReleaseState.java"
}, {
    "name": "SupplyRuleVO",
    "package": "com.dr.oursp.retail.commodity.supply.coal.rule",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.entity.TradeRuleEntity", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "lombok.Builder", "lombok.Setter", "lombok.experimental.Accessors", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "SupplyRuleVO implements SupplyRuleDefinition",
    "extend_name": "",
    "implements_name": ["SupplyRuleDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/rule/SupplyRuleVO.java"
}, {
    "name": "SupplyCheckException",
    "package": "com.dr.oursp.retail.commodity.supply.coal.rule",
    "type": "class",
    "imports": [],
    "class_name": "SupplyCheckException extends RuntimeException",
    "extend_name": "RuntimeException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/rule/SupplyCheckException.java"
}, {
    "name": "SupplyRuleChecker",
    "package": "com.dr.oursp.retail.commodity.supply.coal.rule",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.rule.AbstractNullChecker", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.google.common.collect.Sets", "org.apache.logging.log4j.util.Strings", "java.util.Objects", "java.util.Set"],
    "class_name": "SupplyRuleChecker extends AbstractNullChecker implements SupplyRuleDefinition",
    "extend_name": "AbstractNullChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/rule/SupplyRuleChecker.java"
}, {
    "name": "SupplyRuleDefinition",
    "package": "com.dr.oursp.retail.commodity.supply.coal.rule",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "java.util.Set"],
    "class_name": "SupplyRuleDefinition",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/rule/SupplyRuleDefinition.java"
}, {
    "name": "SupplyLogicalStateProcessor",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.google.common.collect.Lists", "lombok.AllArgsConstructor", "lombok.Getter", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Arrays", "java.util.List", "java.util.function.Predicate"],
    "class_name": "SupplyLogicalStateProcessor",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/SupplyLogicalStateProcessor.java"
}, {
    "name": "SupplyModifier",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.supply.coal.behavior.BasicCoalSupplyBehavior", "com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyBehavior", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleChecker", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleVO", "com.dr.oursp.retail.commodity.supply.coal.state.CoalSupplyBehaviorState", "com.dr.oursp.retail.commodity.supply.coal.state.CoalSupplyDraftState", "com.dr.oursp.retail.commodity.supply.coal.state.CoalSupplyReleaseState", "com.dr.oursp.retail.commodity.supply.coal.state.CoalSupplyUnReleaseState", "com.dr.oursp.retail.consts.DisplayScope", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.oursp.strategy.basic.token.Current", "com.dr.support.enums.Enumerations", "com.dr.support.enums.KeyValueEnum", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.springframework.data.repository.CrudRepository", "org.springframework.util.CollectionUtils", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.List", "java.util.Objects", "java.util.Set", "java.util.function.Consumer", "java.util.function.Supplier"],
    "class_name": "SupplyModifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/SupplyModifier.java"
}, {
    "name": "SupplyCreator",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyUnitEnum", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.repository.SupplyRepository", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleChecker", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleVO", "com.dr.oursp.retail.consts.DisplayScope", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "com.dr.support.enums.KeyValueEnum", "com.google.common.collect.Sets", "org.springframework.util.CollectionUtils", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Size", "java.time.Instant", "java.util.Objects", "java.util.Set"],
    "class_name": "SupplyCreator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/SupplyCreator.java"
}, {
    "name": "SupplySelectorSingle",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.behavior.CoalSupplyBehaviorContext", "com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.repository.SupplyRepository", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid"],
    "class_name": "SupplySelectorSingle extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/SupplySelectorSingle.java"
}, {
    "name": "SupplyStateChangedHandler",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "lombok.Data", "lombok.Getter", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "java.util.Objects", "java.util.function.Consumer"],
    "class_name": "SupplyStateChangedHandler",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/SupplyStateChangedHandler.java"
}, {
    "name": "SupplyVO",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.category.domain.CategoryOptionVO", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyUnitEnum", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleVO", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.quality.domain.QualityReportVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.snapshot.Snapshot", "io.swagger.annotations.ApiModelProperty", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data", "lombok.NoArgsConstructor", "lombok.experimental.Accessors", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Set"],
    "class_name": "SupplyVO implements Snapshot",
    "extend_name": "",
    "implements_name": ["Snapshot"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/SupplyVO.java"
}, {
    "name": "SupplySelector",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyLogicStateEnum", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.repository.SupplyRepository", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.Comparator", "java.util.EnumSet", "java.util.Objects", "java.util.function.Function", "java.util.function.Predicate", "java.util.stream.Stream"],
    "class_name": "SupplySelector extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/SupplySelector.java"
}, {
    "name": "Supply",
    "package": "com.dr.oursp.retail.commodity.supply.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.entity.SupplyEntity", "com.dr.oursp.retail.commodity.supply.coal.repository.SupplyRepository", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size", "java.util.function.Predicate"],
    "class_name": "Supply",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/domain/Supply.java"
}, {
    "name": "SupplyLogicStateEnum",
    "package": "com.dr.oursp.retail.commodity.supply.coal.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "SupplyLogicStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/consts/SupplyLogicStateEnum.java"
}, {
    "name": "SupplyUnitEnum",
    "package": "com.dr.oursp.retail.commodity.supply.coal.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "SupplyUnitEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/consts/SupplyUnitEnum.java"
}, {
    "name": "SupplyStateEnum",
    "package": "com.dr.oursp.retail.commodity.supply.coal.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "SupplyStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/supply/coal/consts/SupplyStateEnum.java"
}, {
    "name": "Commodity",
    "package": "com.dr.oursp.retail.commodity.coal",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.domain.CreatorBuilder", "com.dr.oursp.retail.commodity.coal.domain.SelectorBuilder", "com.dr.oursp.retail.commodity.coal.repository.TradeCommodityRepository", "com.dr.oursp.strategy.setting.PlatformSetting"],
    "class_name": "Commodity",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/Commodity.java"
}, {
    "name": "CoalCommodityModifiablePropertiesImpl",
    "package": "com.dr.oursp.retail.commodity.coal.behavior",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleDefinition", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleVo", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.google.common.collect.Lists", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.springframework.util.CollectionUtils", "javax.validation.constraints.NotNull", "java.util.List", "java.util.Set", "java.util.function.Consumer"],
    "class_name": "CoalCommodityModifiablePropertiesImpl implements CoalCommodityModifiableProperties",
    "extend_name": "",
    "implements_name": ["CoalCommodityModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/behavior/CoalCommodityModifiablePropertiesImpl.java"
}, {
    "name": "CoalCommodityModifiableProperties",
    "package": "com.dr.oursp.retail.commodity.coal.behavior",
    "type": "interface",
    "imports": ["com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleDefinition", "com.dr.oursp.retail.consts.DisplayScopeEnum", "javax.validation.constraints.NotNull", "java.util.Set"],
    "class_name": "CoalCommodityModifiableProperties",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/behavior/CoalCommodityModifiableProperties.java"
}, {
    "name": "CoalCommodityBehaviorContext",
    "package": "com.dr.oursp.retail.commodity.coal.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.domain.Modifier", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleChecker", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "org.springframework.data.repository.CrudRepository", "java.util.Objects", "java.util.function.Function", "java.util.function.Supplier"],
    "class_name": "CoalCommodityBehaviorContext extends Modifier",
    "extend_name": "Modifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/behavior/CoalCommodityBehaviorContext.java"
}, {
    "name": "SnapshotBehavior",
    "package": "com.dr.oursp.retail.commodity.coal.behavior",
    "type": "interface",
    "imports": [],
    "class_name": "SnapshotBehavior",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/behavior/SnapshotBehavior.java"
}, {
    "name": "BasicCoalCommodityBehavior",
    "package": "com.dr.oursp.retail.commodity.coal.behavior",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleChecker", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.supply.coal.consts.SupplyStateEnum", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotNull", "java.util.function.Consumer", "java.util.function.Function", "java.util.function.Predicate"],
    "class_name": "BasicCoalCommodityBehavior implements CoalCommodityBehavior",
    "extend_name": "",
    "implements_name": ["CoalCommodityBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/behavior/BasicCoalCommodityBehavior.java"
}, {
    "name": "CoalCommodityBehavior",
    "package": "com.dr.oursp.retail.commodity.coal.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.support.AccurateNumber", "java.util.function.Function"],
    "class_name": "CoalCommodityBehavior extends SnapshotBehavior",
    "extend_name": "SnapshotBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/behavior/CoalCommodityBehavior.java"
}, {
    "name": "CommodityVo",
    "package": "com.dr.oursp.retail.commodity.coal.vo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleDefinition", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.snapshot.Snapshot", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data", "lombok.NoArgsConstructor", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "CommodityVo implements Snapshot",
    "extend_name": "",
    "implements_name": ["Snapshot"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/vo/CommodityVo.java"
}, {
    "name": "Trade",
    "package": "com.dr.oursp.retail.commodity.coal.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "Trade commodity repository.",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/repository/TradeCommodityRepository.java"
}, {
    "name": "CommodityEntity",
    "package": "com.dr.oursp.retail.commodity.coal.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.rule.CommodityRuleVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "com.google.common.collect.Sets", "lombok.Data", "lombok.EqualsAndHashCode", "org.apache.logging.log4j.util.Strings", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.util.Set"],
    "class_name": "CommodityEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/entity/CommodityEntity.java"
}, {
    "name": "DraftState",
    "package": "com.dr.oursp.retail.commodity.coal.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityBehavior", "com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityModifiableProperties", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.domain.Modifier", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.support.AccurateNumber", "lombok.extern.slf4j.Slf4j", "java.time.Instant", "java.util.function.Function"],
    "class_name": "DraftState extends CoalCommodityBehaviorState",
    "extend_name": "CoalCommodityBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/state/DraftState.java"
}, {
    "name": "ReleaseState",
    "package": "com.dr.oursp.retail.commodity.coal.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityBehavior", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.domain.Modifier", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "ReleaseState extends CoalCommodityBehaviorState",
    "extend_name": "CoalCommodityBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/state/ReleaseState.java"
}, {
    "name": "UnReleaseState",
    "package": "com.dr.oursp.retail.commodity.coal.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityBehavior", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.domain.Modifier"],
    "class_name": "UnReleaseState extends CoalCommodityBehaviorState",
    "extend_name": "CoalCommodityBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/state/UnReleaseState.java"
}, {
    "name": "CoalCommodityBehaviorState",
    "package": "com.dr.oursp.retail.commodity.coal.state",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityBehavior", "com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityModifiableProperties", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.domain.Modifier", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.support.AccurateNumber", "java.util.function.Function"],
    "class_name": "CoalCommodityBehaviorState implements CoalCommodityBehavior",
    "extend_name": "",
    "implements_name": ["CoalCommodityBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/state/CoalCommodityBehaviorState.java"
}, {
    "name": "CommodityRuleDefinition",
    "package": "com.dr.oursp.retail.commodity.coal.rule",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.consts.CheckException", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.consts.TradeRuleDefinition", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "java.util.Set"],
    "class_name": "CommodityRuleDefinition extends TradeRuleDefinition",
    "extend_name": "TradeRuleDefinition",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/rule/CommodityRuleDefinition.java"
}, {
    "name": "CommodityRuleVo",
    "package": "com.dr.oursp.retail.commodity.coal.rule",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "lombok.*", "java.util.Set"],
    "class_name": "CommodityRuleVo implements CommodityRuleDefinition",
    "extend_name": "",
    "implements_name": ["CommodityRuleDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/rule/CommodityRuleVo.java"
}, {
    "name": "CommodityRuleChecker",
    "package": "com.dr.oursp.retail.commodity.coal.rule",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.commodity.supply.coal.rule.SupplyRuleDefinition", "com.dr.oursp.retail.consts.CheckException", "com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.rule.AbstractNullChecker", "com.dr.oursp.retail.support.rule.CheckEvent", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.google.common.collect.Range", "java.time.Instant", "java.util.Objects", "java.util.Set", "java.util.function.Predicate", "java.util.function.Supplier"],
    "class_name": "CommodityRuleChecker",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/rule/CommodityRuleChecker.java"
}, {
    "name": "CommodityRuleBuilder",
    "package": "com.dr.oursp.retail.commodity.coal.rule",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.MarginPaymentTypeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "lombok.Getter", "java.util.Set"],
    "class_name": "CommodityRuleBuilder implements CommodityRuleDefinition",
    "extend_name": "",
    "implements_name": ["CommodityRuleDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/rule/CommodityRuleBuilder.java"
}, {
    "name": "SelectorBuilder",
    "package": "com.dr.oursp.retail.commodity.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.repository.TradeCommodityRepository", "javax.validation.constraints.NotBlank"],
    "class_name": "SelectorBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/domain/SelectorBuilder.java"
}, {
    "name": "Modifier",
    "package": "com.dr.oursp.retail.commodity.coal.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.commodity.coal.behavior.BasicCoalCommodityBehavior", "com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityBehavior", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.state.CoalCommodityBehaviorState", "com.dr.oursp.retail.commodity.coal.state.DraftState", "com.dr.oursp.retail.commodity.coal.state.ReleaseState", "com.dr.oursp.retail.commodity.coal.state.UnReleaseState", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.support.enums.Enumerations", "lombok.extern.slf4j.Slf4j", "org.springframework.data.repository.CrudRepository", "java.util.List", "java.util.function.Consumer", "java.util.function.Supplier"],
    "class_name": "Modifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/domain/Modifier.java"
}, {
    "name": "CreatorBuilder",
    "package": "com.dr.oursp.retail.commodity.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.repository.TradeCommodityRepository", "com.dr.oursp.strategy.setting.PlatformSetting"],
    "class_name": "CreatorBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/domain/CreatorBuilder.java"
}, {
    "name": "SingleSelector",
    "package": "com.dr.oursp.retail.commodity.coal.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.commodity.coal.behavior.CoalCommodityBehaviorContext", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.repository.TradeCommodityRepository", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank", "java.util.Optional"],
    "class_name": "SingleSelector extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/domain/SingleSelector.java"
}, {
    "name": "AnySelector",
    "package": "com.dr.oursp.retail.commodity.coal.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityLogicStateEnum", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.repository.TradeCommodityRepository", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.support.AccurateNumber", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.annotation.Nullable", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.PositiveOrZero", "java.time.Instant", "java.util.Comparator", "java.util.function.Predicate", "java.util.stream.Stream"],
    "class_name": "AnySelector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/domain/AnySelector.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.commodity.coal.domain",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.commodity.coal.consts.TradeCommodityPersistenceStateEnum", "com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.repository.TradeCommodityRepository", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleDefinition", "com.dr.oursp.retail.commodity.coal.rule.CommodityRuleVo", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "com.dr.oursp.strategy.setting.PlatformSetting", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.springframework.util.CollectionUtils", "javax.validation.constraints.NotNull", "java.util.Set"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/domain/Creator.java"
}, {
    "name": "ModifierIfResultExist",
    "package": "com.dr.oursp.retail.commodity.coal.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.entity.CommodityEntity", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "org.springframework.data.repository.CrudRepository", "java.util.Optional", "java.util.function.Supplier"],
    "class_name": "ModifierIfResultExist extends Modifier",
    "extend_name": "Modifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/domain/ModifierIfResultExist.java"
}, {
    "name": "TradeCommodityPersistenceStateEnum",
    "package": "com.dr.oursp.retail.commodity.coal.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "TradeCommodityPersistenceStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/consts/TradeCommodityPersistenceStateEnum.java"
}, {
    "name": "TradeCommodityLogicStateEnum",
    "package": "com.dr.oursp.retail.commodity.coal.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "TradeCommodityLogicStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/consts/TradeCommodityLogicStateEnum.java"
}, {
    "name": "Trade",
    "package": "com.dr.oursp.retail.commodity.coal.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "Trade commodity action enum.",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/commodity/coal/consts/TradeCommodityActionEnum.java"
}, {
    "name": "RetailRole",
    "package": "com.dr.oursp.retail.partner",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.app.consts.AppKeyConst", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.oursp.strategy.basic.entity.jpa.BasicTagJpaEntityWithId", "com.dr.oursp.strategy.basic.tag.PresetTag", "com.dr.oursp.strategy.basic.tag.PresetTags", "com.dr.oursp.strategy.basic.tag.TagSystem", "com.dr.oursp.strategy.basic.tag.consts.PresetTagSystemKey", "com.dr.oursp.strategy.basic.tag.consts.TagTypeEnum", "com.dr.oursp.strategy.basic.tag.preset.BasicTagSystem", "com.dr.oursp.strategy.basic.tag.preset.PresetTagSystemContainer", "com.dr.oursp.strategy.basic.tag.preset.PresetTagSystemScanner", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.enums.KeyValueEnum", "com.google.common.collect.Lists", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.stereotype.Component", "java.util.List", "java.util.Objects", "java.util.Optional"],
    "class_name": "RetailRole extends BasicTagSystem",
    "extend_name": "BasicTagSystem",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/RetailRole.java"
}, {
    "name": "PartnerRepository",
    "package": "com.dr.oursp.retail.partner.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.partner.entity.PartnerEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "PartnerRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/repository/PartnerRepository.java"
}, {
    "name": "PartnerEntity",
    "package": "com.dr.oursp.retail.partner.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "PartnerEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/entity/PartnerEntity.java"
}, {
    "name": "PartnerRemark",
    "package": "com.dr.oursp.retail.partner.entity",
    "type": "class",
    "imports": ["lombok.Builder", "lombok.Data", "org.apache.logging.log4j.util.Strings"],
    "class_name": "PartnerRemark",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/entity/PartnerRemark.java"
}, {
    "name": "Modifier",
    "package": "com.dr.oursp.retail.partner.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.entity.PartnerEntity", "com.dr.oursp.retail.partner.entity.PartnerRemark", "com.dr.oursp.retail.partner.repository.PartnerRepository", "lombok.extern.slf4j.Slf4j", "java.util.function.Supplier"],
    "class_name": "Modifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/domain/Modifier.java"
}, {
    "name": "RepeatException",
    "package": "com.dr.oursp.retail.partner.domain",
    "type": "class",
    "imports": [],
    "class_name": "RepeatException extends Exception",
    "extend_name": "Exception",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/domain/RepeatException.java"
}, {
    "name": "PartnerVO",
    "package": "com.dr.oursp.retail.partner.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.entity.PartnerRemark", "lombok.Getter", "lombok.ToString"],
    "class_name": "PartnerVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/domain/PartnerVO.java"
}, {
    "name": "Partner",
    "package": "com.dr.oursp.retail.partner.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.entity.PartnerEntity", "com.dr.oursp.retail.partner.entity.PartnerRemark", "com.dr.oursp.retail.partner.repository.PartnerRepository", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.enums.Enumerations", "com.google.common.collect.Lists", "lombok.extern.slf4j.Slf4j", "java.util.List"],
    "class_name": "Partner",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/domain/Partner.java"
}, {
    "name": "Selector",
    "package": "com.dr.oursp.retail.partner.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.domain.ValueObjectGenerator", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.entity.PartnerEntity", "com.dr.oursp.retail.partner.repository.PartnerRepository", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank", "java.util.Comparator", "java.util.List", "java.util.Objects", "java.util.Optional", "java.util.function.BiPredicate", "java.util.stream.Collector", "java.util.stream.Stream"],
    "class_name": "Selector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/domain/Selector.java"
}, {
    "name": "SelectorOne",
    "package": "com.dr.oursp.retail.partner.domain",
    "type": "class",
    "imports": ["com.dr.domain.ValueObjectGenerator", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.entity.PartnerEntity", "com.dr.oursp.retail.partner.repository.PartnerRepository", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank", "java.util.List", "java.util.Objects", "java.util.Optional", "java.util.stream.Collector", "java.util.stream.Stream"],
    "class_name": "SelectorOne",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/domain/SelectorOne.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.partner.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.category.consts.OptionsStateEnum", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.entity.PartnerEntity", "com.dr.oursp.retail.partner.repository.PartnerRepository", "com.dr.oursp.strategy.setting.PlatformSetting", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.util.Assert", "javax.validation.constraints.NotNull"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/domain/Creator.java"
}, {
    "name": "PartnerLevelEnum",
    "package": "com.dr.oursp.retail.partner.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "PartnerLevelEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/partner/consts/PartnerLevelEnum.java"
}, {
    "name": "EnumWrapper",
    "package": "com.dr.oursp.retail.support",
    "type": "class",
    "imports": ["com.dr.support.enums.Enumerations", "com.dr.support.enums.KeyValueEnum", "lombok.AccessLevel", "lombok.Setter", "org.springframework.data.annotation.Transient", "java.util.Objects"],
    "class_name": "EnumWrapper",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/EnumWrapper.java"
}, {
    "name": "AccurateNumber",
    "package": "com.dr.oursp.retail.support",
    "type": "class",
    "imports": ["com.fasterxml.jackson.annotation.JsonIgnore", "lombok.AccessLevel", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "org.springframework.data.annotation.Transient", "org.springframework.lang.Nullable", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.math.BigDecimal", "java.util.Objects"],
    "class_name": "AccurateNumber implements Comparable",
    "extend_name": "",
    "implements_name": ["Comparable"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/AccurateNumber.java"
}, {
    "name": "RangeNumber",
    "package": "com.dr.oursp.retail.support",
    "type": "class",
    "imports": ["com.dr.support.enums.Enumerations", "com.dr.support.enums.KeyValueEnum", "com.fasterxml.jackson.annotation.JsonIgnore", "com.google.common.collect.Range", "lombok.AccessLevel", "lombok.Setter", "org.springframework.data.annotation.Transient", "java.util.Objects", "static com.dr.oursp.retail.support.RangeNumber.TypeEnum.*"],
    "class_name": "RangeNumber",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/RangeNumber.java"
}, {
    "name": "Snapshot",
    "package": "com.dr.oursp.retail.support.snapshot",
    "type": "interface",
    "imports": ["java.io.Serializable"],
    "class_name": "Snapshot extends Serializable",
    "extend_name": "Serializable",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/snapshot/Snapshot.java"
}, {
    "name": "SnapshotEntity",
    "package": "com.dr.oursp.retail.support.snapshot",
    "type": "class",
    "imports": ["lombok.Data", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "SnapshotEntity",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/snapshot/SnapshotEntity.java"
}, {
    "name": "SnapshotManager",
    "package": "com.dr.oursp.retail.support.snapshot",
    "type": "class",
    "imports": ["com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Propagation", "org.springframework.transaction.annotation.Transactional", "org.springframework.validation.annotation.Validated", "javax.validation.constraints.NotNull", "java.time.Instant", "java.util.Optional", "java.util.UUID"],
    "class_name": "SnapshotManager",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/snapshot/SnapshotManager.java"
}, {
    "name": "SnapshotRepository",
    "package": "com.dr.oursp.retail.support.snapshot",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository"],
    "class_name": "SnapshotRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/snapshot/SnapshotRepository.java"
}, {
    "name": "RedisLocker",
    "package": "com.dr.oursp.retail.support.Idempotent",
    "type": "class",
    "imports": ["com.dr.support.competition.ResourceCompetitionLocker", "com.dr.support.competition.exception.AcquireLockException", "com.dr.support.competition.exception.ReleaseLockException", "org.springframework.data.redis.core.RedisTemplate", "java.time.Instant", "java.util.Objects"],
    "class_name": "RedisLocker implements ResourceCompetitionLocker",
    "extend_name": "",
    "implements_name": ["ResourceCompetitionLocker"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/Idempotent/RedisLocker.java"
}, {
    "name": "ResourceCompetitionBuilder",
    "package": "com.dr.oursp.retail.support.Idempotent",
    "type": "class",
    "imports": ["com.dr.support.competition.AbstractResourceCompetition", "com.dr.support.competition.ResourceCompetition", "com.dr.support.competition.ResourceCompetitionLocker", "org.springframework.data.redis.core.RedisTemplate"],
    "class_name": "ResourceCompetitionBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/Idempotent/ResourceCompetitionBuilder.java"
}, {
    "name": "AbstractNullChecker",
    "package": "com.dr.oursp.retail.support.rule",
    "type": "abstract class",
    "imports": ["java.util.Objects", "java.util.function.Supplier"],
    "class_name": "AbstractNullChecker extends AbstractChecker",
    "extend_name": "AbstractChecker",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/rule/AbstractNullChecker.java"
}, {
    "name": "CheckEvent",
    "package": "com.dr.oursp.retail.support.rule",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.CheckException", "com.google.common.collect.Lists", "java.util.List", "java.util.function.Predicate", "java.util.function.Supplier"],
    "class_name": "CheckEvent",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/rule/CheckEvent.java"
}, {
    "name": "AbstractChecker",
    "package": "com.dr.oursp.retail.support.rule",
    "type": "abstract class",
    "imports": ["java.util.function.Predicate", "java.util.function.Supplier"],
    "class_name": "AbstractChecker",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/rule/AbstractChecker.java"
}, {
    "name": "EventBus",
    "package": "com.dr.oursp.retail.support.event",
    "type": "class",
    "imports": [],
    "class_name": "EventBus",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/event/EventBus.java"
}, {
    "name": "EventDriver",
    "package": "com.dr.oursp.retail.support.event",
    "type": "interface",
    "imports": [],
    "class_name": "EventDriver",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/event/EventDriver.java"
}, {
    "name": "LocalEventDriver",
    "package": "com.dr.oursp.retail.support.event",
    "type": "class",
    "imports": ["lombok.extern.slf4j.Slf4j"],
    "class_name": "LocalEventDriver",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/event/LocalEventDriver.java"
}, {
    "name": "AbstractEventListener",
    "package": "com.dr.oursp.retail.support.event",
    "type": "abstract class",
    "imports": ["com.dr.oursp.strategy.basic.token.Current", "lombok.AccessLevel", "lombok.Getter", "java.util.Objects"],
    "class_name": "AbstractEventListener",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/event/AbstractEventListener.java"
}, {
    "name": "Event",
    "package": "com.dr.oursp.retail.support.event",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "lombok.Data", "lombok.experimental.SuperBuilder", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "java.time.Instant", "java.util.UUID"],
    "class_name": "Event",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/event/Event.java"
}, {
    "name": "EventListener",
    "package": "com.dr.oursp.retail.support.event",
    "type": "interface",
    "imports": [],
    "class_name": "EventListener",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/support/event/EventListener.java"
}, {
    "name": "StatisticsTotalVo",
    "package": "com.dr.oursp.retail.statistical.vo",
    "type": "class",
    "imports": ["lombok.Builder", "lombok.Data"],
    "class_name": "StatisticsTotalVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/vo/StatisticsTotalVo.java"
}, {
    "name": "StatisticalApi",
    "package": "com.dr.oursp.retail.statistical.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.ApiUrlConst", "com.dr.oursp.retail.statistical.api.http.StatisticaResponse", "com.dr.oursp.retail.statistical.api.http.StatisticalRequest", "com.dr.oursp.retail.statistical.service.StatisticalService", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "io.swagger.annotations.Api", "io.swagger.annotations.ApiOperation", "lombok.extern.slf4j.Slf4j", "org.springframework.web.bind.annotation.CrossOrigin", "org.springframework.web.bind.annotation.GetMapping", "org.springframework.web.bind.annotation.RequestMapping", "org.springframework.web.bind.annotation.RestController", "java.util.List"],
    "class_name": "StatisticalApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/api/StatisticalApi.java"
}, {
    "name": "StatisticalRequest",
    "package": "com.dr.oursp.retail.statistical.api.http",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "io.swagger.annotations.ApiParam", "lombok.Data"],
    "class_name": "StatisticalRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/api/http/StatisticalRequest.java"
}, {
    "name": "StatisticaResponse",
    "package": "com.dr.oursp.retail.statistical.api.http",
    "type": "class",
    "imports": ["lombok.Data"],
    "class_name": "StatisticaResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/api/http/StatisticaResponse.java"
}, {
    "name": "StatisticalService",
    "package": "com.dr.oursp.retail.statistical.service",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.order.domain.CommodityOrder", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.commodity.order.repository.CommodityOrderRepository", "com.dr.oursp.retail.logistics.waybill.plan.PlanWaybill", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository", "com.dr.oursp.retail.statistical.api.http.StatisticaResponse", "com.dr.oursp.retail.statistical.api.http.StatisticalRequest", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.google.common.collect.Lists", "org.springframework.stereotype.Service", "java.util.List", "java.util.Objects", "java.util.stream.Collectors"],
    "class_name": "StatisticalService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/service/StatisticalService.java"
}, {
    "name": "StatisticsService",
    "package": "com.dr.oursp.retail.statistical.service",
    "type": "class",
    "imports": ["com.dr.oursp.retail.statistical.consts.ResourceActionEnum", "com.dr.oursp.retail.statistical.consts.ResourceTypeEnum", "com.dr.oursp.retail.statistical.vo.StatisticsTotalVo", "com.dr.oursp.strategy.basic.monitor.RestApiRequestCollector", "com.google.gson.Gson", "com.google.gson.GsonBuilder", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.stereotype.Service", "java.lang.reflect.Modifier", "java.util.AbstractMap"],
    "class_name": "StatisticsService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/service/StatisticsService.java"
}, {
    "name": "ResourceStatusEnum",
    "package": "com.dr.oursp.retail.statistical.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "ResourceStatusEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/consts/ResourceStatusEnum.java"
}, {
    "name": "ResourceActionEnum",
    "package": "com.dr.oursp.retail.statistical.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "ResourceActionEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/consts/ResourceActionEnum.java"
}, {
    "name": "StatisticalScene",
    "package": "com.dr.oursp.retail.statistical.consts",
    "type": "enum",
    "imports": [],
    "class_name": "StatisticalScene",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/consts/StatisticalScene.java"
}, {
    "name": "StatisticsConstant",
    "package": "com.dr.oursp.retail.statistical.consts",
    "type": "class",
    "imports": ["java.math.BigDecimal"],
    "class_name": "StatisticsConstant",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/consts/StatisticsConstant.java"
}, {
    "name": "PublishTypeEnum",
    "package": "com.dr.oursp.retail.statistical.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "PublishTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/consts/PublishTypeEnum.java"
}, {
    "name": "ResourceTypeEnum",
    "package": "com.dr.oursp.retail.statistical.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.support.enums.KeyValueEnum"],
    "class_name": "ResourceTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/statistical/consts/ResourceTypeEnum.java"
}, {
    "name": "ExecuteOrderBehavior",
    "package": "com.dr.oursp.retail.logistics.order.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "java.util.function.Function"],
    "class_name": "ExecuteOrderBehavior",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/ExecuteOrderBehavior.java"
}, {
    "name": "ExecuteOrderBehaviorContext",
    "package": "com.dr.oursp.retail.logistics.order.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.order.domain.Modifier", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "java.util.function.Function", "java.util.function.Supplier"],
    "class_name": "ExecuteOrderBehaviorContext implements ExecuteOrderBehavior",
    "extend_name": "",
    "implements_name": ["ExecuteOrderBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/ExecuteOrderBehaviorContext.java"
}, {
    "name": "InternalBehavior",
    "package": "com.dr.oursp.retail.logistics.order.behavior",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderCountersignEnum", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.order.domain.Modifier", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderCountersignEntity", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.google.common.collect.Lists", "lombok.AllArgsConstructor", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotNull", "java.util.EnumSet", "java.util.List", "java.util.function.Function", "java.util.function.Predicate"],
    "class_name": "InternalBehavior implements ExecuteOrderBehavior",
    "extend_name": "",
    "implements_name": ["ExecuteOrderBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/InternalBehavior.java"
}, {
    "name": "RejectProperties",
    "package": "com.dr.oursp.retail.logistics.order.behavior.modify",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "java.util.Set"],
    "class_name": "RejectProperties implements ExecuteOrderModifiableProperties",
    "extend_name": "",
    "implements_name": ["ExecuteOrderModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/modify/RejectProperties.java"
}, {
    "name": "AdjustmentProperties",
    "package": "com.dr.oursp.retail.logistics.order.behavior.modify",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "java.util.Set"],
    "class_name": "AdjustmentProperties implements ExecuteOrderModifiableProperties",
    "extend_name": "",
    "implements_name": ["ExecuteOrderModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/modify/AdjustmentProperties.java"
}, {
    "name": "ExecuteOrderModifiableProperties",
    "package": "com.dr.oursp.retail.logistics.order.behavior.modify",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "java.util.Set"],
    "class_name": "ExecuteOrderModifiableProperties",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/modify/ExecuteOrderModifiableProperties.java"
}, {
    "name": "ExecuteOrderProcessPropertiesImplement",
    "package": "com.dr.oursp.retail.logistics.order.behavior.modify",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.consts.ExecuteOrderApprovalActionEnum", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "java.util.Set", "java.util.function.Consumer"],
    "class_name": "ExecuteOrderProcessPropertiesImplement implements ExecuteOrderModifiableProperties",
    "extend_name": "",
    "implements_name": ["ExecuteOrderModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/modify/ExecuteOrderProcessPropertiesImplement.java"
}, {
    "name": "ConfirmProperties",
    "package": "com.dr.oursp.retail.logistics.order.behavior.modify",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "java.util.Set"],
    "class_name": "ConfirmProperties implements ExecuteOrderModifiableProperties",
    "extend_name": "",
    "implements_name": ["ExecuteOrderModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/behavior/modify/ConfirmProperties.java"
}, {
    "name": "ExecuteOrderRepository",
    "package": "com.dr.oursp.retail.logistics.order.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "ExecuteOrderRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/repository/ExecuteOrderRepository.java"
}, {
    "name": "ExecuteOrderRuleEntity",
    "package": "com.dr.oursp.retail.logistics.order.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "com.google.common.collect.Sets", "lombok.Data", "lombok.experimental.Accessors", "java.util.Set"],
    "class_name": "ExecuteOrderRuleEntity",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/entity/ExecuteOrderRuleEntity.java"
}, {
    "name": "ExecuteOrderCountersignEntity",
    "package": "com.dr.oursp.retail.logistics.order.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.consts.ExecuteOrderCountersignEnum", "com.dr.oursp.retail.support.EnumWrapper", "lombok.Data", "org.apache.logging.log4j.util.Strings"],
    "class_name": "ExecuteOrderCountersignEntity",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/entity/ExecuteOrderCountersignEntity.java"
}, {
    "name": "ExecuteOrderEntity",
    "package": "com.dr.oursp.retail.logistics.order.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderCountersignEnum", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Data", "lombok.experimental.Accessors", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.util.EnumSet"],
    "class_name": "ExecuteOrderEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/entity/ExecuteOrderEntity.java"
}, {
    "name": "ApprovalStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.Modifier", "lombok.extern.slf4j.Slf4j"],
    "class_name": "ApprovalStateBehavior extends DefaultStateBehavior",
    "extend_name": "DefaultStateBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/ApprovalStateBehavior.java"
}, {
    "name": "DraftStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.order.domain.Modifier", "lombok.extern.slf4j.Slf4j", "java.util.function.Function"],
    "class_name": "DraftStateBehavior extends DefaultStateBehavior",
    "extend_name": "DefaultStateBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/DraftStateBehavior.java"
}, {
    "name": "CompletStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.Modifier", "lombok.extern.slf4j.Slf4j"],
    "class_name": "CompletStateBehavior extends DefaultStateBehavior",
    "extend_name": "DefaultStateBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/CompletStateBehavior.java"
}, {
    "name": "DefaultStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.ExecuteOrderBehavior", "com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.order.domain.Modifier", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderBehaviorException", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "java.util.function.Function"],
    "class_name": "DefaultStateBehavior implements ExecuteOrderBehavior",
    "extend_name": "",
    "implements_name": ["ExecuteOrderBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/DefaultStateBehavior.java"
}, {
    "name": "DiscardStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.Modifier", "lombok.extern.slf4j.Slf4j"],
    "class_name": "DiscardStateBehavior extends DefaultStateBehavior",
    "extend_name": "DefaultStateBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/DiscardStateBehavior.java"
}, {
    "name": "ApprovalConfirmedStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.Modifier", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "lombok.extern.slf4j.Slf4j"],
    "class_name": "ApprovalConfirmedStateBehavior extends DefaultStateBehavior",
    "extend_name": "DefaultStateBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/ApprovalConfirmedStateBehavior.java"
}, {
    "name": "InExecutionStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.Modifier", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.support.AccurateNumber", "lombok.extern.slf4j.Slf4j"],
    "class_name": "InExecutionStateBehavior extends DefaultStateBehavior",
    "extend_name": "DefaultStateBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/InExecutionStateBehavior.java"
}, {
    "name": "ApprovalRejectedStateBehavior",
    "package": "com.dr.oursp.retail.logistics.order.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.behavior.modify.ExecuteOrderModifiableProperties", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.Modifier", "lombok.extern.slf4j.Slf4j"],
    "class_name": "ApprovalRejectedStateBehavior extends DefaultStateBehavior",
    "extend_name": "DefaultStateBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/state/ApprovalRejectedStateBehavior.java"
}, {
    "name": "SelectorAnyByTradeOrderId",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "java.util.Comparator", "java.util.function.Predicate", "java.util.function.Supplier", "java.util.stream.Stream"],
    "class_name": "SelectorAnyByTradeOrderId extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/SelectorAnyByTradeOrderId.java"
}, {
    "name": "ExecuteOrderStateChangedEventHandler",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "lombok.Data", "lombok.Getter", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "java.util.Objects", "java.util.function.Consumer"],
    "class_name": "ExecuteOrderStateChangedEventHandler",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/ExecuteOrderStateChangedEventHandler.java"
}, {
    "name": "Modifier",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.logistics.order.behavior.InternalBehavior", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderCountersignEnum", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.rule.ExecuteOrderRuleVO", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.retail.logistics.order.state.*", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.oursp.strategy.basic.token.Current", "lombok.Getter", "lombok.extern.slf4j.Slf4j", "org.springframework.util.Assert", "javax.validation.Valid", "java.util.function.Consumer", "java.util.function.Function", "java.util.function.Supplier"],
    "class_name": "Modifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/Modifier.java"
}, {
    "name": "SelectorAny",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "java.util.Comparator", "java.util.function.Predicate", "java.util.stream.Stream"],
    "class_name": "SelectorAny extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/SelectorAny.java"
}, {
    "name": "ExecuteOrderBuyerPayment",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.order.exception.ExecuteOrderPayDuplicatesException"],
    "class_name": "ExecuteOrderBuyerPayment",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/ExecuteOrderBuyerPayment.java"
}, {
    "name": "ExecuteOrder",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "ExecuteOrder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/ExecuteOrder.java"
}, {
    "name": "ExecuteOrderVO",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.countersign.ExecuteOrderCountersignVO", "com.dr.oursp.retail.logistics.order.domain.rule.ExecuteOrderRuleVO", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.snapshot.Snapshot", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data", "lombok.NoArgsConstructor", "org.springframework.data.annotation.Id", "javax.validation.Valid", "javax.validation.constraints.NotNull"],
    "class_name": "ExecuteOrderVO implements Snapshot",
    "extend_name": "",
    "implements_name": ["Snapshot"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/ExecuteOrderVO.java"
}, {
    "name": "SelectorOne",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.logistics.order.behavior.ExecuteOrderBehaviorContext", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "javax.validation.constraints.NotBlank"],
    "class_name": "SelectorOne extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/SelectorOne.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.logistics.order.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.commodity.order.domain.CommodityOrderVO", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.rule.ExecuteOrderRuleVO", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderCountersignEntity", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderEntity", "com.dr.oursp.retail.logistics.order.repository.ExecuteOrderRepository", "com.dr.oursp.retail.support.EnumWrapper", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/Creator.java"
}, {
    "name": "ExecuteOrderRuleVO",
    "package": "com.dr.oursp.retail.logistics.order.domain.rule",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.entity.ExecuteOrderRuleEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "lombok.Builder", "lombok.Setter", "lombok.experimental.Accessors", "java.util.Set", "java.util.stream.Collectors"],
    "class_name": "ExecuteOrderRuleVO implements ExecuteOrderRuleDefinition",
    "extend_name": "",
    "implements_name": ["ExecuteOrderRuleDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/rule/ExecuteOrderRuleVO.java"
}, {
    "name": "ExecuteOrderRuleDefinition",
    "package": "com.dr.oursp.retail.logistics.order.domain.rule",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "java.util.Set"],
    "class_name": "ExecuteOrderRuleDefinition",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/rule/ExecuteOrderRuleDefinition.java"
}, {
    "name": "ExecuteOrderCountersignVO",
    "package": "com.dr.oursp.retail.logistics.order.domain.countersign",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.consts.ExecuteOrderCountersignEnum", "com.dr.oursp.retail.logistics.order.entity.ExecuteOrderCountersignEntity", "com.dr.oursp.retail.support.EnumWrapper", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "ExecuteOrderCountersignVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/domain/countersign/ExecuteOrderCountersignVO.java"
}, {
    "name": "ExecuteOrderPayDuplicatesException",
    "package": "com.dr.oursp.retail.logistics.order.exception",
    "type": "class",
    "imports": [],
    "class_name": "ExecuteOrderPayDuplicatesException extends ExecuteOrderException",
    "extend_name": "ExecuteOrderException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/exception/ExecuteOrderPayDuplicatesException.java"
}, {
    "name": "ExecuteOrderException",
    "package": "com.dr.oursp.retail.logistics.order.exception",
    "type": "class",
    "imports": [],
    "class_name": "ExecuteOrderException extends RuntimeException",
    "extend_name": "RuntimeException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/exception/ExecuteOrderException.java"
}, {
    "name": "ExecuteOrderBehaviorException",
    "package": "com.dr.oursp.retail.logistics.order.exception",
    "type": "class",
    "imports": [],
    "class_name": "ExecuteOrderBehaviorException extends ExecuteOrderException",
    "extend_name": "ExecuteOrderException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/exception/ExecuteOrderBehaviorException.java"
}, {
    "name": "ExecuteOrderApprovalActionEnum",
    "package": "com.dr.oursp.retail.logistics.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteOrderApprovalActionEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/consts/ExecuteOrderApprovalActionEnum.java"
}, {
    "name": "ExecuteOrderCountersignEnum",
    "package": "com.dr.oursp.retail.logistics.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteOrderCountersignEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/consts/ExecuteOrderCountersignEnum.java"
}, {
    "name": "ExecuteOrderStateEnum",
    "package": "com.dr.oursp.retail.logistics.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteOrderStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/consts/ExecuteOrderStateEnum.java"
}, {
    "name": "ExecuteOrderUnitEnum",
    "package": "com.dr.oursp.retail.logistics.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteOrderUnitEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/consts/ExecuteOrderUnitEnum.java"
}, {
    "name": "ExecuteOrderLogicStateEnum",
    "package": "com.dr.oursp.retail.logistics.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteOrderLogicStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/consts/ExecuteOrderLogicStateEnum.java"
}, {
    "name": "LetInterestRateTypeEnum",
    "package": "com.dr.oursp.retail.logistics.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "LetInterestRateTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/order/consts/LetInterestRateTypeEnum.java"
}, {
    "name": "CarRepository",
    "package": "com.dr.oursp.retail.logistics.car.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "CarRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/repository/CarRepository.java"
}, {
    "name": "CarEntity",
    "package": "com.dr.oursp.retail.logistics.car.repository",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "org.apache.logging.log4j.util.Strings", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "CarEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/repository/CarEntity.java"
}, {
    "name": "Modifier",
    "package": "com.dr.oursp.retail.logistics.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.logistics.car.consts.CarAvailableEnum", "com.dr.oursp.retail.logistics.car.consts.CarOwnerTypeEnum", "com.dr.oursp.retail.logistics.car.repository.CarEntity", "com.dr.oursp.retail.logistics.car.repository.CarRepository", "javax.validation.constraints.NotNull", "java.util.function.Supplier"],
    "class_name": "Modifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/domain/Modifier.java"
}, {
    "name": "SelectorAny",
    "package": "com.dr.oursp.retail.logistics.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.logistics.car.consts.CarAvailableEnum", "com.dr.oursp.retail.logistics.car.repository.CarEntity", "com.dr.oursp.retail.logistics.car.repository.CarRepository", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "java.util.Comparator", "java.util.function.Predicate", "java.util.stream.Stream"],
    "class_name": "SelectorAny extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/domain/SelectorAny.java"
}, {
    "name": "CarVo",
    "package": "com.dr.oursp.retail.logistics.car.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.car.consts.CarOwnerTypeEnum", "com.dr.oursp.retail.logistics.car.repository.CarEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "lombok.Builder", "lombok.Getter"],
    "class_name": "CarVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/domain/CarVo.java"
}, {
    "name": "SelectorOne",
    "package": "com.dr.oursp.retail.logistics.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.logistics.car.repository.CarEntity", "com.dr.oursp.retail.logistics.car.repository.CarRepository"],
    "class_name": "SelectorOne extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/domain/SelectorOne.java"
}, {
    "name": "Car",
    "package": "com.dr.oursp.retail.logistics.car.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.car.repository.CarRepository", "com.dr.oursp.strategy.setting.PlatformSetting", "javax.validation.constraints.NotBlank"],
    "class_name": "Car",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/domain/Car.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.logistics.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.logistics.car.consts.CarAvailableEnum", "com.dr.oursp.retail.logistics.car.consts.CarOwnerTypeEnum", "com.dr.oursp.retail.logistics.car.repository.CarEntity", "com.dr.oursp.retail.logistics.car.repository.CarRepository", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "com.dr.oursp.strategy.setting.PlatformSetting", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotNull"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/domain/Creator.java"
}, {
    "name": "CarAvailableEnum",
    "package": "com.dr.oursp.retail.logistics.car.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "CarAvailableEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/consts/CarAvailableEnum.java"
}, {
    "name": "CarOwnerTypeEnum",
    "package": "com.dr.oursp.retail.logistics.car.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "CarOwnerTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/car/consts/CarOwnerTypeEnum.java"
}, {
    "name": "RetailDriverRepository",
    "package": "com.dr.oursp.retail.logistics.freighter.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.freighter.entity.DriverEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "RetailDriverRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/repository/RetailDriverRepository.java"
}, {
    "name": "DriverEntity",
    "package": "com.dr.oursp.retail.logistics.freighter.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "DriverEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/entity/DriverEntity.java"
}, {
    "name": "DriverSelectorSingle",
    "package": "com.dr.oursp.retail.logistics.freighter.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSaver", "com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.logistics.freighter.entity.DriverEntity", "com.dr.oursp.retail.logistics.freighter.repository.RetailDriverRepository", "lombok.extern.slf4j.Slf4j", "javax.validation.Valid"],
    "class_name": "DriverSelectorSingle extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/domain/DriverSelectorSingle.java"
}, {
    "name": "DriverSelector",
    "package": "com.dr.oursp.retail.logistics.freighter.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.logistics.freighter.consts.CarrierRoleEnum", "com.dr.oursp.retail.logistics.freighter.consts.CarrierSignedStateEnum", "com.dr.oursp.retail.logistics.freighter.entity.DriverEntity", "com.dr.oursp.retail.logistics.freighter.repository.RetailDriverRepository", "org.apache.logging.log4j.util.Strings", "java.util.Collection", "java.util.Comparator", "java.util.Objects", "java.util.stream.Stream"],
    "class_name": "DriverSelector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/domain/DriverSelector.java"
}, {
    "name": "Driver",
    "package": "com.dr.oursp.retail.logistics.freighter.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.freighter.repository.RetailDriverRepository", "com.dr.oursp.strategy.setting.PlatformSetting", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank"],
    "class_name": "Driver",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/domain/Driver.java"
}, {
    "name": "DriverVO",
    "package": "com.dr.oursp.retail.logistics.freighter.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.freighter.entity.DriverEntity", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.springframework.data.mongodb.core.index.Indexed", "javax.validation.constraints.NotBlank", "javax.validation.constraints.PositiveOrZero"],
    "class_name": "DriverVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/domain/DriverVO.java"
}, {
    "name": "DriverModifier",
    "package": "com.dr.oursp.retail.logistics.freighter.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.logistics.freighter.consts.CarrierRoleEnum", "com.dr.oursp.retail.logistics.freighter.entity.DriverEntity", "lombok.extern.slf4j.Slf4j", "java.util.function.Supplier"],
    "class_name": "DriverModifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/domain/DriverModifier.java"
}, {
    "name": "DriverCreator",
    "package": "com.dr.oursp.retail.logistics.freighter.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.logistics.freighter.consts.CarrierRoleEnum", "com.dr.oursp.retail.logistics.freighter.entity.DriverEntity", "com.dr.oursp.retail.logistics.freighter.repository.RetailDriverRepository", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.basic.token.CurrentUser", "com.dr.oursp.strategy.setting.PlatformSetting", "lombok.extern.slf4j.Slf4j"],
    "class_name": "DriverCreator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/domain/DriverCreator.java"
}, {
    "name": "CarrierRoleEnum",
    "package": "com.dr.oursp.retail.logistics.freighter.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "CarrierRoleEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/consts/CarrierRoleEnum.java"
}, {
    "name": "CarrierSignedStateEnum",
    "package": "com.dr.oursp.retail.logistics.freighter.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "CarrierSignedStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/freighter/consts/CarrierSignedStateEnum.java"
}, {
    "name": "AreaTypeEnum",
    "package": "com.dr.oursp.retail.logistics.area",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "AreaTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/area/AreaTypeEnum.java"
}, {
    "name": "AreaManager",
    "package": "com.dr.oursp.retail.logistics.area",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.support.serialization.Serializations", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Lists", "com.google.gson.JsonSyntaxException", "com.google.gson.reflect.TypeToken", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.validation.annotation.Validated", "javax.annotation.PostConstruct", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Size", "java.io.*", "java.nio.charset.StandardCharsets", "java.util.List", "java.util.Optional", "java.util.stream.Collectors"],
    "class_name": "AreaManager",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/area/AreaManager.java"
}, {
    "name": "AreaEntity",
    "package": "com.dr.oursp.retail.logistics.area",
    "type": "class",
    "imports": ["lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "AreaEntity",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/area/AreaEntity.java"
}, {
    "name": "AreaVO",
    "package": "com.dr.oursp.retail.logistics.area",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.EnumWrapper", "lombok.Builder", "lombok.Data"],
    "class_name": "AreaVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/area/AreaVO.java"
}, {
    "name": "AreaRepository",
    "package": "com.dr.oursp.retail.logistics.area",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository"],
    "class_name": "AreaRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/area/AreaRepository.java"
}, {
    "name": "AddressRepository",
    "package": "com.dr.oursp.retail.logistics.address.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.address.entity.AddressEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "AddressRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/repository/AddressRepository.java"
}, {
    "name": "AddressEntity",
    "package": "com.dr.oursp.retail.logistics.address.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "com.google.common.collect.Lists", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "javax.validation.constraints.Size", "java.util.List"],
    "class_name": "AddressEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/entity/AddressEntity.java"
}, {
    "name": "AddressArea",
    "package": "com.dr.oursp.retail.logistics.address.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "org.springframework.data.mongodb.core.mapping.Document", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size"],
    "class_name": "AddressArea extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/entity/AddressArea.java"
}, {
    "name": "Modifier",
    "package": "com.dr.oursp.retail.logistics.address.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.logistics.address.entity.AddressArea", "com.dr.oursp.retail.logistics.address.entity.AddressEntity", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.Max", "javax.validation.constraints.Min", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size", "java.util.List", "java.util.Objects", "java.util.function.Supplier"],
    "class_name": "Modifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/domain/Modifier.java"
}, {
    "name": "Address",
    "package": "com.dr.oursp.retail.logistics.address.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.address.repository.AddressRepository", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank"],
    "class_name": "Address",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/domain/Address.java"
}, {
    "name": "SelectorSingle",
    "package": "com.dr.oursp.retail.logistics.address.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSaver", "com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.logistics.address.entity.AddressEntity", "com.dr.oursp.retail.logistics.address.repository.AddressRepository", "javax.validation.constraints.NotBlank"],
    "class_name": "SelectorSingle extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/domain/SelectorSingle.java"
}, {
    "name": "Selector",
    "package": "com.dr.oursp.retail.logistics.address.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.logistics.address.entity.AddressEntity", "com.dr.oursp.retail.logistics.address.repository.AddressRepository", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotEmpty", "java.util.Comparator", "java.util.Objects", "java.util.stream.Stream"],
    "class_name": "Selector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/domain/Selector.java"
}, {
    "name": "AddressVO",
    "package": "com.dr.oursp.retail.logistics.address.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.address.entity.AddressArea", "com.dr.oursp.retail.logistics.address.entity.AddressEntity", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.google.common.collect.Lists", "io.swagger.annotations.ApiModelProperty", "lombok.Getter", "lombok.experimental.Accessors", "java.util.List"],
    "class_name": "AddressVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/domain/AddressVO.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.logistics.address.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.category.consts.CategoryStateEnum", "com.dr.oursp.retail.logistics.address.entity.AddressArea", "com.dr.oursp.retail.logistics.address.entity.AddressEntity", "com.dr.oursp.retail.logistics.address.repository.AddressRepository", "com.dr.oursp.strategy.basic.token.Current", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.Max", "javax.validation.constraints.Min", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size", "java.util.List", "java.util.Objects"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/address/domain/Creator.java"
}, {
    "name": "WaybillRepository",
    "package": "com.dr.oursp.retail.logistics.waybill.order.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "WaybillRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/order/repository/WaybillRepository.java"
}, {
    "name": "WaybillEntity",
    "package": "com.dr.oursp.retail.logistics.waybill.order.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Data", "org.apache.logging.log4j.util.Strings", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "WaybillEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/order/repository/WaybillEntity.java"
}, {
    "name": "OrderRemark",
    "package": "com.dr.oursp.retail.logistics.waybill.order.repository",
    "type": "class",
    "imports": ["lombok.AccessLevel", "lombok.Builder", "lombok.Data", "java.time.Instant"],
    "class_name": "OrderRemark",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/order/repository/OrderRemark.java"
}, {
    "name": "WaybillOrderVO",
    "package": "com.dr.oursp.retail.logistics.waybill.order.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.repository.OrderRemark", "com.dr.oursp.retail.logistics.waybill.order.repository.WaybillEntity", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "lombok.Builder", "lombok.Data"],
    "class_name": "WaybillOrderVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/order/domain/WaybillOrderVO.java"
}, {
    "name": "Waybill",
    "package": "com.dr.oursp.retail.logistics.waybill.order.domain",
    "type": "class",
    "imports": ["com.dr.domain.*", "com.dr.oursp.retail.commodity.coal.vo.CommodityVo", "com.dr.oursp.retail.commodity.supply.coal.domain.SupplyVO", "com.dr.oursp.retail.logistics.waybill.order.consts.WaybillOrderStateEnum", "com.dr.oursp.retail.logistics.waybill.order.repository.OrderRemark", "com.dr.oursp.retail.logistics.waybill.order.repository.WaybillEntity", "com.dr.oursp.retail.logistics.waybill.order.repository.WaybillRepository", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.strategy.setting.PlatformSetting", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.util.Comparator", "java.util.Objects", "java.util.function.Predicate", "java.util.function.Supplier", "java.util.stream.Stream"],
    "class_name": "Waybill",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/order/domain/Waybill.java"
}, {
    "name": "WaybillOrderStateEnum",
    "package": "com.dr.oursp.retail.logistics.waybill.order.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "WaybillOrderStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/order/consts/WaybillOrderStateEnum.java"
}, {
    "name": "PlanWaybill",
    "package": "com.dr.oursp.retail.logistics.waybill.plan",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.domain.CreatorBuilder", "com.dr.oursp.retail.logistics.waybill.plan.domain.SelectorBuilder", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository"],
    "class_name": "PlanWaybill",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/PlanWaybill.java"
}, {
    "name": "PlanWaybillTradeRuleVo",
    "package": "com.dr.oursp.retail.logistics.waybill.plan",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.TradeRuleVo", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillTradeRuleDefinition"],
    "class_name": "PlanWaybillTradeRuleVo extends TradeRuleVo implements PlanWaybillTradeRuleDefinition",
    "extend_name": "TradeRuleVo",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/PlanWaybillTradeRuleVo.java"
}, {
    "name": "PlanWaybillBehavior",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.commodity.coal.behavior.SnapshotBehavior", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "java.util.function.Function"],
    "class_name": "PlanWaybillBehavior extends SnapshotBehavior",
    "extend_name": "SnapshotBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/behavior/PlanWaybillBehavior.java"
}, {
    "name": "BasicPlanWaybillBehavior",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.behavior",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.logistics.order.consts.ExecuteOrderStateEnum", "com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotNull", "java.util.function.Consumer", "java.util.function.Function", "java.util.function.Predicate"],
    "class_name": "BasicPlanWaybillBehavior implements PlanWaybillBehavior",
    "extend_name": "",
    "implements_name": ["PlanWaybillBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/behavior/BasicPlanWaybillBehavior.java"
}, {
    "name": "PlanWaybillModifiableProperties",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.behavior",
    "type": "interface",
    "imports": ["com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillTradeRuleDefinition", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.RangeNumber", "java.util.Set"],
    "class_name": "PlanWaybillModifiableProperties",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/behavior/PlanWaybillModifiableProperties.java"
}, {
    "name": "PlanWaybillBehaviorContext",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.plan.domain.PlanWaybillVo", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "org.springframework.data.repository.CrudRepository", "java.util.function.Function", "java.util.function.Supplier"],
    "class_name": "PlanWaybillBehaviorContext extends Modifier",
    "extend_name": "Modifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/behavior/PlanWaybillBehaviorContext.java"
}, {
    "name": "PlanWaybillModifiablePropertiesImpl",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.behavior",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.waybill.plan.PlanWaybillTradeRuleVo", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillTradeRuleDefinition", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.google.common.collect.Lists", "org.springframework.util.CollectionUtils", "java.util.List", "java.util.Set", "java.util.function.Consumer"],
    "class_name": "PlanWaybillModifiablePropertiesImpl implements PlanWaybillModifiableProperties",
    "extend_name": "",
    "implements_name": ["PlanWaybillModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/behavior/PlanWaybillModifiablePropertiesImpl.java"
}, {
    "name": "PlanWaybillEntity",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.ContactVo", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.waybill.plan.PlanWaybillTradeRuleVo", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "com.google.common.collect.Sets", "lombok.Data", "org.apache.logging.log4j.util.Strings", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.util.Set"],
    "class_name": "PlanWaybillEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/repository/PlanWaybillEntity.java"
}, {
    "name": "PlanWaybillRepository",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "PlanWaybillRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/repository/PlanWaybillRepository.java"
}, {
    "name": "DraftState",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillModifiableProperties", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.Modifier", "com.dr.oursp.retail.support.AccurateNumber", "lombok.extern.slf4j.Slf4j", "java.util.function.Function"],
    "class_name": "DraftState extends PlanWaybillBehaviorState",
    "extend_name": "PlanWaybillBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/state/DraftState.java"
}, {
    "name": "PlanWaybillBehaviorState",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.state",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.logistics.order.domain.ExecuteOrderVO", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillModifiableProperties", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "java.util.function.Function"],
    "class_name": "PlanWaybillBehaviorState implements PlanWaybillBehavior",
    "extend_name": "",
    "implements_name": ["PlanWaybillBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/state/PlanWaybillBehaviorState.java"
}, {
    "name": "PutOnState",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.Modifier", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "PutOnState extends PlanWaybillBehaviorState",
    "extend_name": "PlanWaybillBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/state/PutOnState.java"
}, {
    "name": "TakeDownState",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.domain.Modifier"],
    "class_name": "TakeDownState extends PlanWaybillBehaviorState",
    "extend_name": "PlanWaybillBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/state/TakeDownState.java"
}, {
    "name": "SelectorBuilder",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository", "javax.validation.Valid", "javax.validation.constraints.NotBlank"],
    "class_name": "SelectorBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/SelectorBuilder.java"
}, {
    "name": "PlanWaybillVo",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.consts.ContactVo", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.waybill.plan.PlanWaybillTradeRuleVo", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.snapshot.Snapshot", "com.google.common.collect.Sets", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data", "lombok.NoArgsConstructor", "org.springframework.data.annotation.Id", "java.util.Set"],
    "class_name": "PlanWaybillVo implements Snapshot",
    "extend_name": "",
    "implements_name": ["Snapshot"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/PlanWaybillVo.java"
}, {
    "name": "Modifier",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.logistics.waybill.plan.behavior.BasicPlanWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.logistics.waybill.plan.state.DraftState", "com.dr.oursp.retail.logistics.waybill.plan.state.PlanWaybillBehaviorState", "com.dr.oursp.retail.logistics.waybill.plan.state.PutOnState", "com.dr.oursp.retail.logistics.waybill.plan.state.TakeDownState", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.support.enums.Enumerations", "lombok.extern.slf4j.Slf4j", "org.springframework.data.repository.CrudRepository", "java.util.List", "java.util.function.Consumer", "java.util.function.Supplier"],
    "class_name": "Modifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/Modifier.java"
}, {
    "name": "CreatorBuilder",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "CreatorBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/CreatorBuilder.java"
}, {
    "name": "SingleSelector",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.logistics.waybill.plan.behavior.PlanWaybillBehaviorContext", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank", "java.util.Optional"],
    "class_name": "SingleSelector extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/SingleSelector.java"
}, {
    "name": "AnySelector",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository", "com.dr.oursp.retail.support.RangeNumber", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "javax.annotation.Nullable", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.PositiveOrZero", "java.util.Comparator", "java.util.EnumSet", "java.util.function.Predicate", "java.util.stream.Stream"],
    "class_name": "AnySelector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/AnySelector.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.consts.DisplayScopeEnum", "com.dr.oursp.retail.logistics.address.domain.AddressVO", "com.dr.oursp.retail.logistics.waybill.plan.PlanWaybillTradeRuleVo", "com.dr.oursp.retail.logistics.waybill.plan.consts.ConveyingPlatformTypeEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillStateEnum", "com.dr.oursp.retail.logistics.waybill.plan.consts.PlanWaybillTradeRuleDefinition", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillRepository", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "javax.validation.constraints.NotNull", "java.util.Set", "java.util.function.Supplier"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/Creator.java"
}, {
    "name": "ModifierIfResultExist",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.plan.repository.PlanWaybillEntity", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "org.springframework.data.repository.CrudRepository", "java.util.Optional", "java.util.function.Supplier"],
    "class_name": "ModifierIfResultExist extends Modifier",
    "extend_name": "Modifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/domain/ModifierIfResultExist.java"
}, {
    "name": "PlanWaybillTradeRuleDefinition",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.consts",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.consts.TradeRuleDefinition"],
    "class_name": "PlanWaybillTradeRuleDefinition extends TradeRuleDefinition",
    "extend_name": "TradeRuleDefinition",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/consts/PlanWaybillTradeRuleDefinition.java"
}, {
    "name": "ConveyingPlatformTypeEnum",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.retail.consts.TradeModeEnum", "com.dr.support.enums.KeyValueEnum", "lombok.Getter", "java.util.EnumSet"],
    "class_name": "ConveyingPlatformTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/consts/ConveyingPlatformTypeEnum.java"
}, {
    "name": "PlanWaybillLogicStateEnum",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "PlanWaybillLogicStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/consts/PlanWaybillLogicStateEnum.java"
}, {
    "name": "PlanWaybillStateEnum",
    "package": "com.dr.oursp.retail.logistics.waybill.plan.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "PlanWaybillStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/plan/consts/PlanWaybillStateEnum.java"
}, {
    "name": "CarWaybillModifiablePropertiesImpl",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.behavior",
    "type": "class",
    "imports": ["com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "com.google.common.collect.Lists", "java.util.List", "java.util.function.Consumer"],
    "class_name": "CarWaybillModifiablePropertiesImpl implements CarWaybillModifiableProperties",
    "extend_name": "",
    "implements_name": ["CarWaybillModifiableProperties"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/behavior/CarWaybillModifiablePropertiesImpl.java"
}, {
    "name": "BasicCarWaybillBehavior",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.behavior",
    "type": "class",
    "imports": ["com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.*", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "lombok.extern.slf4j.Slf4j", "org.springframework.util.Assert", "java.util.function.Consumer"],
    "class_name": "BasicCarWaybillBehavior implements CarWaybillBehavior",
    "extend_name": "",
    "implements_name": ["CarWaybillBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/behavior/BasicCarWaybillBehavior.java"
}, {
    "name": "CarWaybillBehaviorContext",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.behavior",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.domain.CarWaybillVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "org.springframework.data.repository.CrudRepository", "java.util.function.Supplier"],
    "class_name": "CarWaybillBehaviorContext extends Modifier",
    "extend_name": "Modifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/behavior/CarWaybillBehaviorContext.java"
}, {
    "name": "CarWaybillModifiableProperties",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.behavior",
    "type": "interface",
    "imports": ["com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber"],
    "class_name": "CarWaybillModifiableProperties",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/behavior/CarWaybillModifiableProperties.java"
}, {
    "name": "CarWaybillBehavior",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.behavior",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.commodity.coal.behavior.SnapshotBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "CarWaybillBehavior extends SnapshotBehavior",
    "extend_name": "SnapshotBehavior",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/behavior/CarWaybillBehavior.java"
}, {
    "name": "CarWaybillEntity",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.util.ArrayList", "java.util.List"],
    "class_name": "CarWaybillEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/repository/CarWaybillEntity.java"
}, {
    "name": "Feedback",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.repository",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor"],
    "class_name": "Feedback extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/repository/Feedback.java"
}, {
    "name": "DeliveryNotice",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data", "lombok.NoArgsConstructor"],
    "class_name": "DeliveryNotice extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/repository/DeliveryNotice.java"
}, {
    "name": "LoadingRegistration",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data", "lombok.NoArgsConstructor"],
    "class_name": "LoadingRegistration extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/repository/LoadingRegistration.java"
}, {
    "name": "Coordinate",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.repository",
    "type": "class",
    "imports": ["lombok.AllArgsConstructor", "lombok.Data"],
    "class_name": "Coordinate",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/repository/Coordinate.java"
}, {
    "name": "CarWaybillRepository",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.Collection", "java.util.stream.Stream"],
    "class_name": "CarWaybillRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/repository/CarWaybillRepository.java"
}, {
    "name": "ReceiptConfirm",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.AllArgsConstructor", "lombok.Builder", "lombok.Data", "lombok.NoArgsConstructor"],
    "class_name": "ReceiptConfirm extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/repository/ReceiptConfirm.java"
}, {
    "name": "CarWaybillBehaviorState",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.state",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillModifiableProperties", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "CarWaybillBehaviorState implements CarWaybillBehavior",
    "extend_name": "",
    "implements_name": ["CarWaybillBehavior"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/state/CarWaybillBehaviorState.java"
}, {
    "name": "DiscardState",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum"],
    "class_name": "DiscardState extends CarWaybillBehaviorState",
    "extend_name": "CarWaybillBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/state/DiscardState.java"
}, {
    "name": "DraftState",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum"],
    "class_name": "DraftState extends CarWaybillBehaviorState",
    "extend_name": "CarWaybillBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/state/DraftState.java"
}, {
    "name": "FinishState",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum"],
    "class_name": "FinishState extends CarWaybillBehaviorState",
    "extend_name": "CarWaybillBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/state/FinishState.java"
}, {
    "name": "ExecutingState",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.state",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.CoordinateVo", "com.dr.oursp.retail.logistics.waybill.execute.car.domain.Modifier", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "ExecutingState extends CarWaybillBehaviorState",
    "extend_name": "CarWaybillBehaviorState",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/state/ExecutingState.java"
}, {
    "name": "Modifier",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.logistics.waybill.execute.car.behavior.BasicCarWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillBehavior", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.logistics.waybill.execute.car.state.*", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.support.snapshot.SnapshotManager", "com.dr.support.enums.Enumerations", "org.springframework.data.repository.CrudRepository", "java.util.List", "java.util.function.Consumer", "java.util.function.Supplier"],
    "class_name": "Modifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/domain/Modifier.java"
}, {
    "name": "SelectorAny",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillRepository", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.support.RangeNumber", "com.dr.support.enums.Enumerations", "lombok.AccessLevel", "lombok.Getter", "lombok.Setter", "org.apache.logging.log4j.util.Strings", "javax.validation.Valid", "javax.validation.constraints.NotNull", "java.util.*", "java.util.function.Function", "java.util.function.Predicate", "java.util.stream.Stream"],
    "class_name": "SelectorAny extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/domain/SelectorAny.java"
}, {
    "name": "CarWaybill",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillRepository", "com.dr.oursp.strategy.setting.PlatformSetting", "javax.validation.constraints.NotBlank", "java.util.Collection"],
    "class_name": "CarWaybill",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/domain/CarWaybill.java"
}, {
    "name": "CarWaybillVo",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.repository.*", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.support.snapshot.Snapshot", "lombok.Builder", "lombok.Data", "java.util.List"],
    "class_name": "CarWaybillVo implements Snapshot",
    "extend_name": "",
    "implements_name": ["Snapshot"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/domain/CarWaybillVo.java"
}, {
    "name": "SelectorOne",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.logistics.waybill.execute.car.behavior.CarWaybillBehaviorContext", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillRepository", "com.dr.oursp.retail.support.snapshot.SnapshotManager"],
    "class_name": "SelectorOne extends AbstractSelectorBySingle",
    "extend_name": "AbstractSelectorBySingle",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/domain/SelectorOne.java"
}, {
    "name": "CoordinateVo",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.domain",
    "type": "class",
    "imports": ["com.dr.oursp.retail.logistics.waybill.execute.car.repository.Coordinate", "lombok.Value"],
    "class_name": "CoordinateVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/domain/CoordinateVo.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.car.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillEntity", "com.dr.oursp.retail.logistics.waybill.execute.car.repository.CarWaybillRepository", "com.dr.oursp.retail.logistics.waybill.execute.consts.ExecuteStateEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.strategy.setting.PlatformSetting", "lombok.extern.slf4j.Slf4j", "javax.validation.constraints.NotBlank"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/car/domain/Creator.java"
}, {
    "name": "ExecuteStateEnum",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/consts/ExecuteStateEnum.java"
}, {
    "name": "ExecuteAffiliationEnum",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteAffiliationEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/consts/ExecuteAffiliationEnum.java"
}, {
    "name": "ExecuteInExecutionStateEnum",
    "package": "com.dr.oursp.retail.logistics.waybill.execute.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum", "lombok.Getter"],
    "class_name": "ExecuteInExecutionStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/waybill/execute/consts/ExecuteInExecutionStateEnum.java"
}, {
    "name": "CarrierDockingPlatformFactory",
    "package": "com.dr.oursp.retail.logistics.reference",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.logistics.reference.caller.zhonghuan.LogisticsRemoteCaller", "org.springframework.stereotype.Component"],
    "class_name": "CarrierDockingPlatformFactory",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/CarrierDockingPlatformFactory.java"
}, {
    "name": "CarrierPush",
    "package": "com.dr.oursp.retail.logistics.reference",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.reference.dto.response.TrackVinLoginResponse", "com.dr.oursp.retail.logistics.reference.dto.request.*", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.token.TokenException", "java.util.List"],
    "class_name": "CarrierPush",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/CarrierPush.java"
}, {
    "name": "CarrierBaseResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "CarrierBaseResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/CarrierBaseResponse.java"
}, {
    "name": "BidSubmitResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.math.BigDecimal"],
    "class_name": "BidSubmitResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/BidSubmitResponse.java"
}, {
    "name": "CarrierOrderResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "CarrierOrderResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/CarrierOrderResponse.java"
}, {
    "name": "AuthorizeLoginResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "AuthorizeLoginResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/AuthorizeLoginResponse.java"
}, {
    "name": "TrackVinLoginResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "java.util.List"],
    "class_name": "TrackVinLoginResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/TrackVinLoginResponse.java"
}, {
    "name": "PerformWaybillReplyResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.Positive"],
    "class_name": "PerformWaybillReplyResponse extends CarrierBaseResponse",
    "extend_name": "CarrierBaseResponse",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/PerformWaybillReplyResponse.java"
}, {
    "name": "ReplyConfirmResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.Positive"],
    "class_name": "ReplyConfirmResponse extends CarrierBaseResponse",
    "extend_name": "CarrierBaseResponse",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/ReplyConfirmResponse.java"
}, {
    "name": "CarrierResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "CarrierResponse extends CarrierBaseResponse",
    "extend_name": "CarrierBaseResponse",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/CarrierResponse.java"
}, {
    "name": "PlanWayBillResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "PlanWayBillResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/PlanWayBillResponse.java"
}, {
    "name": "WayBillAcceptResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive"],
    "class_name": "WayBillAcceptResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/WayBillAcceptResponse.java"
}, {
    "name": "CarrierServiceResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModel", "io.swagger.annotations.ApiModelProperty", "lombok.*", "java.io.Serializable"],
    "class_name": "CarrierServiceResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/CarrierServiceResponse.java"
}, {
    "name": "ForwardAgentResponse",
    "package": "com.dr.oursp.retail.logistics.reference.dto.response",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "ForwardAgentResponse extends CarrierBaseResponse",
    "extend_name": "CarrierBaseResponse",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/response/ForwardAgentResponse.java"
}, {
    "name": "BidSubmitRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["com.dr.oursp.infra.account.consts.AccountTypeEnum", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.vo.BaseRemoteVO", "com.dr.oursp.retail.remote.zhonghuan.constants.ZhongHuanConstants", "com.dr.oursp.retail.remote.zhonghuan.vo.CarrierAccountRemoteVO", "com.dr.support.enums.KeyValueEnum", "com.dr.support.serialization.Serializations", "com.google.common.collect.Sets", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.math.BigDecimal"],
    "class_name": "BidSubmitRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/BidSubmitRequest.java"
}, {
    "name": "GoodsInfoRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "GoodsInfoRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/GoodsInfoRequest.java"
}, {
    "name": "DeliveryInfoRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "DeliveryInfoRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/DeliveryInfoRequest.java"
}, {
    "name": "ForwardAgentRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "ForwardAgentRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/ForwardAgentRequest.java"
}, {
    "name": "CarrierLoginRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors", "org.springframework.beans.factory.annotation.Value", "org.springframework.stereotype.Component"],
    "class_name": "CarrierLoginRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/CarrierLoginRequest.java"
}, {
    "name": "NoticeOfAwardRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.math.BigDecimal"],
    "class_name": "NoticeOfAwardRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/NoticeOfAwardRequest.java"
}, {
    "name": "WayBillAcceptRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "WayBillAcceptRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/WayBillAcceptRequest.java"
}, {
    "name": "ContractDeliverRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "ContractDeliverRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/ContractDeliverRequest.java"
}, {
    "name": "NoticeBidWinningRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.math.BigDecimal"],
    "class_name": "NoticeBidWinningRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/NoticeBidWinningRequest.java"
}, {
    "name": "BiddingRulesRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "BiddingRulesRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/BiddingRulesRequest.java"
}, {
    "name": "TrunkConfirmRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "TrunkConfirmRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/TrunkConfirmRequest.java"
}, {
    "name": "PlanningWaybillRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "PlanningWaybillRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/PlanningWaybillRequest.java"
}, {
    "name": "ShippingLineRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "ShippingLineRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/ShippingLineRequest.java"
}, {
    "name": "HippoLoginRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "HippoLoginRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/HippoLoginRequest.java"
}, {
    "name": "DRConfirmBargainRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive"],
    "class_name": "DRConfirmBargainRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/DRConfirmBargainRequest.java"
}, {
    "name": "PickupInfoRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "PickupInfoRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/PickupInfoRequest.java"
}, {
    "name": "DeliveryRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "DeliveryRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/DeliveryRequest.java"
}, {
    "name": "OpenBidOrderRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive"],
    "class_name": "OpenBidOrderRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/OpenBidOrderRequest.java"
}, {
    "name": "TaskReplyRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "TaskReplyRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/TaskReplyRequest.java"
}, {
    "name": "NoticeBidRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "java.util.Set"],
    "class_name": "NoticeBidRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/NoticeBidRequest.java"
}, {
    "name": "TrackingRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "TrackingRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/TrackingRequest.java"
}, {
    "name": "CarrierRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "CarrierRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/CarrierRequest.java"
}, {
    "name": "ReceivingRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.math.BigDecimal"],
    "class_name": "ReceivingRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/ReceivingRequest.java"
}, {
    "name": "BillingInfoRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "BillingInfoRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/BillingInfoRequest.java"
}, {
    "name": "PerformWaybillAcceptRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "PerformWaybillAcceptRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/PerformWaybillAcceptRequest.java"
}, {
    "name": "TrackVinRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive"],
    "class_name": "TrackVinRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/TrackVinRequest.java"
}, {
    "name": "UpdateBidOrderInfoRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["com.dr.support.enums.KeyValueEnum", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "javax.validation.constraints.PositiveOrZero", "java.math.BigDecimal"],
    "class_name": "UpdateBidOrderInfoRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/UpdateBidOrderInfoRequest.java"
}, {
    "name": "BillPushRequest",
    "package": "com.dr.oursp.retail.logistics.reference.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Positive", "java.math.BigDecimal"],
    "class_name": "BillPushRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/dto/request/BillPushRequest.java"
}, {
    "name": "VehicleRemoteRepository",
    "package": "com.dr.oursp.retail.logistics.reference.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.reference.entity.VehicleRemoteEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "VehicleRemoteRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/repository/VehicleRemoteRepository.java"
}, {
    "name": "BidRecordRemoteRepository",
    "package": "com.dr.oursp.retail.logistics.reference.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.reference.entity.BidRecordRemoteEntity", "com.dr.oursp.retail.logistics.reference.entity.PlanOrderRemoteEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "BidRecordRemoteRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/repository/BidRecordRemoteRepository.java"
}, {
    "name": "LogisticsRemoteRelationAggregation",
    "package": "com.dr.oursp.retail.logistics.reference.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.logistics.reference.entity.BidRecordRemoteEntity", "com.dr.oursp.retail.logistics.reference.entity.VehicleRemoteEntity", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.stereotype.Component", "java.math.BigDecimal", "java.util.Optional"],
    "class_name": "LogisticsRemoteRelationAggregation",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/repository/LogisticsRemoteRelationAggregation.java"
}, {
    "name": "PlanOrderRemoteRepository",
    "package": "com.dr.oursp.retail.logistics.reference.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.reference.entity.PlanOrderRemoteEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "PlanOrderRemoteRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/repository/PlanOrderRemoteRepository.java"
}, {
    "name": "VehicleRemoteEntity",
    "package": "com.dr.oursp.retail.logistics.reference.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document", "java.math.BigDecimal"],
    "class_name": "VehicleRemoteEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/entity/VehicleRemoteEntity.java"
}, {
    "name": "PlanOrderRemoteEntity",
    "package": "com.dr.oursp.retail.logistics.reference.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document", "javax.validation.constraints.Size"],
    "class_name": "PlanOrderRemoteEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/entity/PlanOrderRemoteEntity.java"
}, {
    "name": "BidRecordRemoteEntity",
    "package": "com.dr.oursp.retail.logistics.reference.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document", "javax.validation.constraints.Size"],
    "class_name": "BidRecordRemoteEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/entity/BidRecordRemoteEntity.java"
}, {
    "name": "LogisticsRemoteCaller",
    "package": "com.dr.oursp.retail.logistics.reference.caller.zhonghuan",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.logistics.reference.CarrierPush", "com.dr.oursp.retail.logistics.reference.dto.request.*", "com.dr.oursp.retail.logistics.reference.dto.response.*", "com.dr.oursp.retail.logistics.reference.entity.BidRecordRemoteEntity", "com.dr.oursp.retail.logistics.reference.entity.PlanOrderRemoteEntity", "com.dr.oursp.retail.logistics.reference.repository.BidRecordRemoteRepository", "com.dr.oursp.retail.logistics.reference.repository.PlanOrderRemoteRepository", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.token.TokenException", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.stereotype.Component", "org.springframework.util.Assert", "java.util.List", "java.util.Optional"],
    "class_name": "LogisticsRemoteCaller implements CarrierPush",
    "extend_name": "",
    "implements_name": ["CarrierPush"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/caller/zhonghuan/LogisticsRemoteCaller.java"
}, {
    "name": "LogisticsFeignClient",
    "package": "com.dr.oursp.retail.logistics.reference.caller.zhonghuan",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.logistics.reference.dto.request.*", "com.dr.oursp.retail.logistics.reference.dto.response.*", "org.springframework.cloud.openfeign.FeignClient", "org.springframework.web.bind.annotation.*"],
    "class_name": "LogisticsFeignClient",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/logistics/reference/caller/zhonghuan/LogisticsFeignClient.java"
}, {
    "name": "CheckException",
    "package": "com.dr.oursp.retail.consts",
    "type": "class",
    "imports": [],
    "class_name": "CheckException extends RuntimeException",
    "extend_name": "RuntimeException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/CheckException.java"
}, {
    "name": "ContactVo",
    "package": "com.dr.oursp.retail.consts",
    "type": "class",
    "imports": ["lombok.Data"],
    "class_name": "ContactVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/ContactVo.java"
}, {
    "name": "DisplayScope",
    "package": "com.dr.oursp.retail.consts",
    "type": "interface",
    "imports": ["com.dr.support.enums.KeyValueEnum", "java.util.Set"],
    "class_name": "DisplayScope",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/DisplayScope.java"
}, {
    "name": "MarginPaymentTypeEnum",
    "package": "com.dr.oursp.retail.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "MarginPaymentTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/MarginPaymentTypeEnum.java"
}, {
    "name": "TradeModeEnum",
    "package": "com.dr.oursp.retail.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "TradeModeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/TradeModeEnum.java"
}, {
    "name": "TradeRuleDefinition",
    "package": "com.dr.oursp.retail.consts",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "java.util.Set"],
    "class_name": "TradeRuleDefinition",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/TradeRuleDefinition.java"
}, {
    "name": "DisplayScopeEnum",
    "package": "com.dr.oursp.retail.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "DisplayScopeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/DisplayScopeEnum.java"
}, {
    "name": "TradeRuleVo",
    "package": "com.dr.oursp.retail.consts",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.retail.trade.consts.DealModeEnum", "com.dr.oursp.retail.trade.consts.DeliveryMarginScopeEnum", "lombok.Data", "java.util.Set"],
    "class_name": "TradeRuleVo implements TradeRuleDefinition",
    "extend_name": "",
    "implements_name": ["TradeRuleDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/consts/TradeRuleVo.java"
}, {
    "name": "InvoiceWrite",
    "package": "com.dr.oursp.retail.invoice",
    "type": "class",
    "imports": ["com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.retail.invoice.repository.InvoiceEntity", "com.dr.oursp.retail.invoice.repository.InvoiceRepositoryAdapter", "com.google.common.collect.Maps", "lombok.AccessLevel", "lombok.Getter", "lombok.Setter", "lombok.extern.slf4j.Slf4j", "org.springframework.data.repository.CrudRepository", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.Size", "java.util.Map", "java.util.function.Consumer"],
    "class_name": "InvoiceWrite",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/invoice/InvoiceWrite.java"
}, {
    "name": "InvoiceRepository",
    "package": "com.dr.oursp.retail.invoice.repository",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository"],
    "class_name": "InvoiceRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/invoice/repository/InvoiceRepository.java"
}, {
    "name": "InvoiceEntity",
    "package": "com.dr.oursp.retail.invoice.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.invoice.model.Invoice", "com.dr.oursp.retail.invoice.model.InvoiceContent", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "org.springframework.data.mongodb.core.mapping.Document", "javax.persistence.Column", "javax.persistence.Id", "java.util.Map"],
    "class_name": "InvoiceEntity extends BasicDocumentEntity implements Invoice",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/invoice/repository/InvoiceEntity.java"
}, {
    "name": "InvoiceRepositoryAdapter",
    "package": "com.dr.oursp.retail.invoice.repository",
    "type": "class",
    "imports": ["lombok.extern.slf4j.Slf4j", "org.springframework.data.repository.CrudRepository", "javax.validation.constraints.NotNull", "java.util.Map"],
    "class_name": "InvoiceRepositoryAdapter",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/invoice/repository/InvoiceRepositoryAdapter.java"
}, {
    "name": "AbstractInvoice",
    "package": "com.dr.oursp.retail.invoice.model",
    "type": "class",
    "imports": ["lombok.Getter", "lombok.RequiredArgsConstructor", "lombok.Setter", "lombok.ToString", "lombok.experimental.SuperBuilder"],
    "class_name": "AbstractInvoice implements Invoice",
    "extend_name": "",
    "implements_name": ["Invoice"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/invoice/model/AbstractInvoice.java"
}, {
    "name": "Invoice",
    "package": "com.dr.oursp.retail.invoice.model",
    "type": "interface",
    "imports": [],
    "class_name": "Invoice",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/invoice/model/Invoice.java"
}, {
    "name": "InvoiceContent",
    "package": "com.dr.oursp.retail.invoice.model",
    "type": "class",
    "imports": ["lombok.Builder", "lombok.Data"],
    "class_name": "InvoiceContent",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/invoice/model/InvoiceContent.java"
}, {
    "name": "RetailPlayer",
    "package": "com.dr.oursp.retail.player",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.account.CapitalAccount", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.proxy.AbstractCapitalAccountManagerProxyFactory", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxy", "com.dr.oursp.retail.player.domain.RetailPlayerCreator", "com.dr.oursp.retail.player.domain.RetailPlayerSelector", "com.dr.oursp.retail.player.repository.AggregateRepository", "com.dr.oursp.retail.player.vo.RetailPlayerPropDefinition", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "lombok.Getter", "lombok.extern.slf4j.Slf4j"],
    "class_name": "RetailPlayer",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/RetailPlayer.java"
}, {
    "name": "RetailPlayerProps",
    "package": "com.dr.oursp.retail.player.vo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.consts.SignedStateEnum", "lombok.AccessLevel", "lombok.NoArgsConstructor", "lombok.Setter", "lombok.experimental.Accessors", "java.math.BigDecimal"],
    "class_name": "RetailPlayerProps implements RetailPlayerPropDefinition",
    "extend_name": "",
    "implements_name": ["RetailPlayerPropDefinition"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/vo/RetailPlayerProps.java"
}, {
    "name": "RetailPlayerVo",
    "package": "com.dr.oursp.retail.player.vo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.entity.DockingPlatform", "com.dr.oursp.retail.player.entity.RetailPlayerEntity", "com.dr.oursp.strategy.basic.identity.domain.vo.IdentityVO", "com.dr.oursp.strategy.basic.token.Current", "com.dr.support.enums.Enumerations", "com.google.common.collect.Sets", "lombok.Builder", "lombok.Data", "org.springframework.util.CollectionUtils", "java.math.BigDecimal", "java.util.Set"],
    "class_name": "RetailPlayerVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/vo/RetailPlayerVo.java"
}, {
    "name": "RetailPlayerDetailVO",
    "package": "com.dr.oursp.retail.player.vo",
    "type": "class",
    "imports": ["com.dr.oursp.infra.org.api.http.response.OrgInfoDetail", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.consts.SignedStateEnum", "lombok.Builder", "lombok.Data", "java.math.BigDecimal"],
    "class_name": "RetailPlayerDetailVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/vo/RetailPlayerDetailVO.java"
}, {
    "name": "RetailPlayerPropDefinition",
    "package": "com.dr.oursp.retail.player.vo",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.consts.SignedStateEnum", "java.math.BigDecimal"],
    "class_name": "RetailPlayerPropDefinition",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/vo/RetailPlayerPropDefinition.java"
}, {
    "name": "AggregateRepository",
    "package": "com.dr.oursp.retail.player.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.repo.CapitalAccountRepository", "com.dr.oursp.strategy.basic.identity.IdentityManager", "lombok.Getter"],
    "class_name": "AggregateRepository",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/repository/AggregateRepository.java"
}, {
    "name": "RetailPlayerRepository",
    "package": "com.dr.oursp.retail.player.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.entity.RetailPlayerEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.stream.Stream"],
    "class_name": "RetailPlayerRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/repository/RetailPlayerRepository.java"
}, {
    "name": "DockingPlatform",
    "package": "com.dr.oursp.retail.player.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.consts.DockingPlatformEnum", "com.dr.oursp.retail.support.EnumWrapper", "lombok.Data", "javax.validation.Valid", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull"],
    "class_name": "DockingPlatform",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/entity/DockingPlatform.java"
}, {
    "name": "RetailPlayerEntity",
    "package": "com.dr.oursp.retail.player.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "com.google.common.collect.Sets", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document", "java.util.Objects", "java.util.Set"],
    "class_name": "RetailPlayerEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/entity/RetailPlayerEntity.java"
}, {
    "name": "CapitalAccountCreatorByPayCenter",
    "package": "com.dr.oursp.retail.player.account",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSaver", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountStateEnum", "com.dr.oursp.retail.player.account.repo.CapitalAccountEntity", "com.dr.oursp.retail.player.account.repo.CapitalAccountRepository", "com.dr.support.serialization.Serializations", "com.google.common.collect.Sets", "org.apache.logging.log4j.util.Strings", "java.math.BigDecimal", "java.util.Set", "java.util.UUID"],
    "class_name": "CapitalAccountCreatorByPayCenter extends CapitalAccountCreator",
    "extend_name": "CapitalAccountCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/CapitalAccountCreatorByPayCenter.java"
}, {
    "name": "CapitalAccountCreator",
    "package": "com.dr.oursp.retail.player.account",
    "type": "abstract class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountStateEnum", "com.dr.oursp.retail.player.account.repo.CapitalAccountEntity", "java.math.BigDecimal", "java.util.Set", "java.util.function.Supplier"],
    "class_name": "CapitalAccountCreator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/CapitalAccountCreator.java"
}, {
    "name": "CapitalAccountVo",
    "package": "com.dr.oursp.retail.player.account",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountStateEnum", "com.dr.oursp.retail.player.account.repo.CapitalAccountEntity", "com.dr.oursp.retail.support.EnumWrapper", "lombok.*", "java.math.BigDecimal", "java.util.Set"],
    "class_name": "CapitalAccountVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/CapitalAccountVo.java"
}, {
    "name": "CapitalAccountSelector",
    "package": "com.dr.oursp.retail.player.account",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.domain.AbstractSelector", "com.dr.domain.AbstractSelectorBySingle", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountStateEnum", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxy", "com.dr.oursp.retail.player.account.repo.CapitalAccountEntity", "com.dr.oursp.retail.player.account.repo.CapitalAccountRepository", "com.dr.support.serialization.Serializations", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.math.BigDecimal", "java.util.Set", "java.util.function.Supplier", "java.util.stream.Stream"],
    "class_name": "CapitalAccountSelector",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/CapitalAccountSelector.java"
}, {
    "name": "CapitalAccount",
    "package": "com.dr.oursp.retail.player.account",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.changing.CapitalAccountChanging", "com.dr.oursp.retail.player.account.changing.CapitalAccountChangingImpl", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxy", "com.dr.oursp.retail.player.account.repo.CapitalAccountRepository", "com.dr.oursp.retail.player.account.statement.CapitalAccountStatement", "com.dr.oursp.retail.player.account.statement.CapitalAccountStatementRepository", "lombok.extern.slf4j.Slf4j"],
    "class_name": "CapitalAccount",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/CapitalAccount.java"
}, {
    "name": "AbstractCapitalAccountManagerProxyFactory",
    "package": "com.dr.oursp.retail.player.account.proxy",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum"],
    "class_name": "AbstractCapitalAccountManagerProxyFactory",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/AbstractCapitalAccountManagerProxyFactory.java"
}, {
    "name": "MoneyAccountRemoteRelationRepository",
    "package": "com.dr.oursp.retail.player.account.proxy",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional"],
    "class_name": "MoneyAccountRemoteRelationRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/MoneyAccountRemoteRelationRepository.java"
}, {
    "name": "PayCenterProxy",
    "package": "com.dr.oursp.retail.player.account.proxy",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.changing.ChangingCapitalAccount", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.CapitalAccountStateEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetailByRefundBidMargin", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceiptByRedirectUrl", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.EnumWrapper", "com.dr.oursp.third.consts.BizDomainEnum", "com.dr.oursp.third.pay.PayCenter", "com.dr.oursp.third.pay.consts.PayCenterCapitalAccountTypeEnum", "com.dr.oursp.third.pay.http.response.BasicSignAccountCapitalResponse", "com.dr.oursp.third.pay.http.response.SignAccountCapitalPayResponse", "com.dr.oursp.third.pay.http.response.SignAccountCapitalRefundResponse", "com.dr.oursp.third.pay.repo.PayCenterCapitalAccountEntity", "com.google.common.collect.Maps", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Component", "org.springframework.util.Assert", "java.io.IOException", "java.util.List", "java.util.Map"],
    "class_name": "PayCenterProxy implements CapitalAccountManagerProxy",
    "extend_name": "",
    "implements_name": ["CapitalAccountManagerProxy"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/PayCenterProxy.java"
}, {
    "name": "CapitalAccountManagerProxy",
    "package": "com.dr.oursp.retail.player.account.proxy",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.changing.ChangingCapitalAccount", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "java.io.IOException"],
    "class_name": "CapitalAccountManagerProxy",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/CapitalAccountManagerProxy.java"
}, {
    "name": "MoneyAccountRemoteRelationEntity",
    "package": "com.dr.oursp.retail.player.account.proxy",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "MoneyAccountRemoteRelationEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/MoneyAccountRemoteRelationEntity.java"
}, {
    "name": "CapitalAccountManagerProxyFactory",
    "package": "com.dr.oursp.retail.player.account.proxy",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "org.springframework.stereotype.Component"],
    "class_name": "CapitalAccountManagerProxyFactory extends AbstractCapitalAccountManagerProxyFactory",
    "extend_name": "AbstractCapitalAccountManagerProxyFactory",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/CapitalAccountManagerProxyFactory.java"
}, {
    "name": "CapitalBehaviorReceipt",
    "package": "com.dr.oursp.retail.player.account.proxy.receipt",
    "type": "interface",
    "imports": [],
    "class_name": "CapitalBehaviorReceipt",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/receipt/CapitalBehaviorReceipt.java"
}, {
    "name": "CapitalBehaviorReceiptByRedirectUrl",
    "package": "com.dr.oursp.retail.player.account.proxy.receipt",
    "type": "class",
    "imports": ["lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor"],
    "class_name": "CapitalBehaviorReceiptByRedirectUrl implements CapitalBehaviorReceipt",
    "extend_name": "",
    "implements_name": ["CapitalBehaviorReceipt"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/receipt/CapitalBehaviorReceiptByRedirectUrl.java"
}, {
    "name": "CapitalBehaviorDetailByBidMargin",
    "package": "com.dr.oursp.retail.player.account.proxy.detail",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.proxy.callback.PayCenterCallbackParamsForBidMargin", "com.dr.oursp.retail.support.AccurateNumber", "lombok.Getter", "lombok.Setter", "lombok.experimental.Accessors"],
    "class_name": "CapitalBehaviorDetailByBidMargin extends CapitalBehaviorDetail",
    "extend_name": "CapitalBehaviorDetail",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/detail/CapitalBehaviorDetailByBidMargin.java"
}, {
    "name": "CapitalBehaviorDetailByPayment",
    "package": "com.dr.oursp.retail.player.account.proxy.detail",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.proxy.callback.PayCenterCallBackParamsForPayment", "lombok.Getter", "lombok.Setter", "lombok.experimental.Accessors"],
    "class_name": "CapitalBehaviorDetailByPayment extends CapitalBehaviorDetail",
    "extend_name": "CapitalBehaviorDetail",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/detail/CapitalBehaviorDetailByPayment.java"
}, {
    "name": "CapitalBehaviorDetailBuilder",
    "package": "com.dr.oursp.retail.player.account.proxy.detail",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.support.AccurateNumber"],
    "class_name": "CapitalBehaviorDetailBuilder",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/detail/CapitalBehaviorDetailBuilder.java"
}, {
    "name": "CapitalBehaviorDetail",
    "package": "com.dr.oursp.retail.player.account.proxy.detail",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings"],
    "class_name": "CapitalBehaviorDetail",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/detail/CapitalBehaviorDetail.java"
}, {
    "name": "CapitalBehaviorDetailByRefundBidMargin",
    "package": "com.dr.oursp.retail.player.account.proxy.detail",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "lombok.Getter", "lombok.Setter", "lombok.experimental.Accessors"],
    "class_name": "CapitalBehaviorDetailByRefundBidMargin extends CapitalBehaviorDetail",
    "extend_name": "CapitalBehaviorDetail",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/detail/CapitalBehaviorDetailByRefundBidMargin.java"
}, {
    "name": "PayCenterCallBackParamsForPayment",
    "package": "com.dr.oursp.retail.player.account.proxy.callback",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "java.io.Serializable"],
    "class_name": "PayCenterCallBackParamsForPayment extends PayCenterCallBackParam implements Serializable",
    "extend_name": "PayCenterCallBackParam",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/callback/PayCenterCallBackParamsForPayment.java"
}, {
    "name": "PayCenterCallBackParam",
    "package": "com.dr.oursp.retail.player.account.proxy.callback",
    "type": "abstract class",
    "imports": ["lombok.extern.slf4j.Slf4j", "org.springframework.web.util.UriComponentsBuilder", "java.beans.IntrospectionException", "java.beans.PropertyDescriptor", "java.lang.reflect.Field", "java.lang.reflect.InvocationTargetException"],
    "class_name": "PayCenterCallBackParam",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/callback/PayCenterCallBackParam.java"
}, {
    "name": "PayCenterCallbackParamsForBidMargin",
    "package": "com.dr.oursp.retail.player.account.proxy.callback",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "javax.validation.constraints.NotBlank", "javax.validation.constraints.NotNull", "java.io.Serializable", "java.math.BigDecimal"],
    "class_name": "PayCenterCallbackParamsForBidMargin extends PayCenterCallBackParam implements Serializable",
    "extend_name": "PayCenterCallBackParam",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/proxy/callback/PayCenterCallbackParamsForBidMargin.java"
}, {
    "name": "ChangingCapitalAccount",
    "package": "com.dr.oursp.retail.player.account.changing",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "lombok.Data"],
    "class_name": "ChangingCapitalAccount",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/changing/ChangingCapitalAccount.java"
}, {
    "name": "CapitalAccountChangingImpl",
    "package": "com.dr.oursp.retail.player.account.changing",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxy", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "com.google.common.collect.Sets", "lombok.extern.slf4j.Slf4j", "org.springframework.util.Assert", "org.springframework.validation.annotation.Validated", "java.io.IOException", "java.util.Set"],
    "class_name": "CapitalAccountChangingImpl implements CapitalAccountChanging",
    "extend_name": "",
    "implements_name": ["CapitalAccountChanging"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/changing/CapitalAccountChangingImpl.java"
}, {
    "name": "CapitalAccountChanging",
    "package": "com.dr.oursp.retail.player.account.changing",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "javax.validation.constraints.Negative", "javax.validation.constraints.NotNull", "javax.validation.constraints.Positive", "java.io.IOException", "java.util.Set"],
    "class_name": "CapitalAccountChanging",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/changing/CapitalAccountChanging.java"
}, {
    "name": "CapitalAccountStatementEntity",
    "package": "com.dr.oursp.retail.player.account.statement",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.FundsChangeBehaviorEnum", "com.dr.oursp.strategy.basic.entity.jpa.BasicJpaEntity", "lombok.Data", "lombok.EqualsAndHashCode", "javax.persistence.Column", "javax.persistence.Entity", "javax.persistence.Id", "javax.persistence.Table", "java.math.BigDecimal"],
    "class_name": "CapitalAccountStatementEntity extends BasicJpaEntity",
    "extend_name": "BasicJpaEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/statement/CapitalAccountStatementEntity.java"
}, {
    "name": "CapitalAccountStatement",
    "package": "com.dr.oursp.retail.player.account.statement",
    "type": "class",
    "imports": [],
    "class_name": "CapitalAccountStatement",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/statement/CapitalAccountStatement.java"
}, {
    "name": "Selector",
    "package": "com.dr.oursp.retail.player.account.statement",
    "type": "class",
    "imports": ["com.dr.domain.EntityGenerator", "com.dr.domain.PagedSelector", "com.dr.domain.ValueObjectGenerator", "java.util.Optional", "java.util.function.Function", "java.util.function.Supplier", "java.util.stream.Collector", "java.util.stream.Stream"],
    "class_name": "Selector",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/statement/Selector.java"
}, {
    "name": "CapitalAccountStatementVo",
    "package": "com.dr.oursp.retail.player.account.statement",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.consts.FundsChangeBehaviorEnum", "lombok.Builder", "lombok.Data", "javax.persistence.Column", "java.math.BigDecimal"],
    "class_name": "CapitalAccountStatementVo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/statement/CapitalAccountStatementVo.java"
}, {
    "name": "Creator",
    "package": "com.dr.oursp.retail.player.account.statement",
    "type": "class",
    "imports": ["com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "java.math.BigDecimal", "java.util.UUID"],
    "class_name": "Creator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/statement/Creator.java"
}, {
    "name": "CapitalAccountStatementRepository",
    "package": "com.dr.oursp.retail.player.account.statement",
    "type": "interface",
    "imports": ["org.springframework.data.jpa.repository.JpaRepository", "java.util.stream.Stream"],
    "class_name": "CapitalAccountStatementRepository extends JpaRepository",
    "extend_name": "JpaRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/statement/CapitalAccountStatementRepository.java"
}, {
    "name": "CapitalAccountNotFoundException",
    "package": "com.dr.oursp.retail.player.account.exception",
    "type": "class",
    "imports": [],
    "class_name": "CapitalAccountNotFoundException extends CapitalAccountTransferException",
    "extend_name": "CapitalAccountTransferException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/exception/CapitalAccountNotFoundException.java"
}, {
    "name": "CapitalAccountTransferRequestException",
    "package": "com.dr.oursp.retail.player.account.exception",
    "type": "class",
    "imports": [],
    "class_name": "CapitalAccountTransferRequestException extends CapitalAccountTransferException",
    "extend_name": "CapitalAccountTransferException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/exception/CapitalAccountTransferRequestException.java"
}, {
    "name": "CapitalAccountTransferResponseException",
    "package": "com.dr.oursp.retail.player.account.exception",
    "type": "class",
    "imports": [],
    "class_name": "CapitalAccountTransferResponseException extends CapitalAccountTransferException",
    "extend_name": "CapitalAccountTransferException",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/exception/CapitalAccountTransferResponseException.java"
}, {
    "name": "CapitalAccountTransferException",
    "package": "com.dr.oursp.retail.player.account.exception",
    "type": "class",
    "imports": [],
    "class_name": "CapitalAccountTransferException extends Exception",
    "extend_name": "Exception",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/exception/CapitalAccountTransferException.java"
}, {
    "name": "CapitalAccountManagerTypeEnum",
    "package": "com.dr.oursp.retail.player.account.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "CapitalAccountManagerTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/consts/CapitalAccountManagerTypeEnum.java"
}, {
    "name": "Capital",
    "package": "com.dr.oursp.retail.player.account.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.enums.KeyValueEnum"],
    "class_name": "Capital account state.",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/consts/CapitalAccountStateEnum.java"
}, {
    "name": "FundsChangeBehaviorEnum",
    "package": "com.dr.oursp.retail.player.account.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "FundsChangeBehaviorEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/consts/FundsChangeBehaviorEnum.java"
}, {
    "name": "TransferAmountTypeEnum",
    "package": "com.dr.oursp.retail.player.account.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "TransferAmountTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/consts/TransferAmountTypeEnum.java"
}, {
    "name": "TransferBehaviorEnum",
    "package": "com.dr.oursp.retail.player.account.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "TransferBehaviorEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/consts/TransferBehaviorEnum.java"
}, {
    "name": "FlowDirectionEnum",
    "package": "com.dr.oursp.retail.player.account.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "FlowDirectionEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/consts/FlowDirectionEnum.java"
}, {
    "name": "CapitalAccountRepository",
    "package": "com.dr.oursp.retail.player.account.repo",
    "type": "interface",
    "imports": ["org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional", "java.util.stream.Stream"],
    "class_name": "CapitalAccountRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/repo/CapitalAccountRepository.java"
}, {
    "name": "CapitalAccountEntity",
    "package": "com.dr.oursp.retail.player.account.repo",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.mapping.Document", "java.math.BigDecimal"],
    "class_name": "CapitalAccountEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/account/repo/CapitalAccountEntity.java"
}, {
    "name": "RetailPlayerModifier",
    "package": "com.dr.oursp.retail.player.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractModifier", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.entity.DockingPlatform", "com.dr.oursp.retail.player.entity.RetailPlayerEntity", "com.dr.oursp.retail.player.repository.RetailPlayerRepository", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.domain.vo.IdentityVO", "com.google.common.collect.Sets", "org.springframework.util.CollectionUtils", "java.math.BigDecimal", "java.util.Optional", "java.util.Set", "java.util.function.Supplier"],
    "class_name": "RetailPlayerModifier extends AbstractModifier",
    "extend_name": "AbstractModifier",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/domain/RetailPlayerModifier.java"
}, {
    "name": "RetailPlayerCreator",
    "package": "com.dr.oursp.retail.player.domain",
    "type": "class",
    "imports": ["cn.hutool.core.lang.Assert", "com.dr.domain.AbstractCreator", "com.dr.domain.AbstractSaver", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.entity.DockingPlatform", "com.dr.oursp.retail.player.entity.RetailPlayerEntity", "com.dr.oursp.retail.player.repository.RetailPlayerRepository", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.domain.vo.IdentityVO", "com.google.common.collect.Sets", "org.springframework.util.CollectionUtils", "java.math.BigDecimal", "java.util.Optional", "java.util.Set"],
    "class_name": "RetailPlayerCreator extends AbstractCreator",
    "extend_name": "AbstractCreator",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/domain/RetailPlayerCreator.java"
}, {
    "name": "RetailPlayerCreatorOrModifier",
    "package": "com.dr.oursp.retail.player.domain",
    "type": "class",
    "imports": ["com.dr.domain.EntitySaver", "com.dr.domain.EntitySetterVisitor", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.entity.RetailPlayerEntity", "com.dr.oursp.retail.player.repository.RetailPlayerRepository", "com.dr.oursp.retail.player.vo.RetailPlayerPropDefinition", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.google.common.collect.Lists", "java.util.List", "java.util.Optional", "java.util.function.Consumer", "java.util.function.Supplier"],
    "class_name": "RetailPlayerCreatorOrModifier",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/domain/RetailPlayerCreatorOrModifier.java"
}, {
    "name": "RetailPlayerSelector",
    "package": "com.dr.oursp.retail.player.domain",
    "type": "class",
    "imports": ["com.dr.domain.AbstractSelector", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.consts.DockingPlatformEnum", "com.dr.oursp.retail.player.entity.RetailPlayerEntity", "com.dr.oursp.retail.player.repository.RetailPlayerRepository", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.domain.vo.IdentityVO", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotBlank", "java.util.Comparator", "java.util.function.Predicate", "java.util.stream.Stream"],
    "class_name": "RetailPlayerSelector extends AbstractSelector",
    "extend_name": "AbstractSelector",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/domain/RetailPlayerSelector.java"
}, {
    "name": "RetailRoleAppRelationEnum",
    "package": "com.dr.oursp.retail.player.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.infra.app.preset.AppConst", "com.dr.support.enums.KeyValueEnum"],
    "class_name": "RetailRoleAppRelationEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/consts/RetailRoleAppRelationEnum.java"
}, {
    "name": "SignedStateEnum",
    "package": "com.dr.oursp.retail.player.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "SignedStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/consts/SignedStateEnum.java"
}, {
    "name": "DockingPlatformEnum",
    "package": "com.dr.oursp.retail.player.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "DockingPlatformEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/consts/DockingPlatformEnum.java"
}, {
    "name": "ContractOrderPushFactory",
    "package": "com.dr.oursp.retail.player.reference",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.caller.yunxiao.YunXiaoInvokeImpl", "org.springframework.stereotype.Component"],
    "class_name": "ContractOrderPushFactory",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/ContractOrderPushFactory.java"
}, {
    "name": "ContractOrderPush",
    "package": "com.dr.oursp.retail.player.reference",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.reference.vo.TradeOrderRemoteVO", "com.dr.oursp.strategy.api.ServiceResponse"],
    "class_name": "ContractOrderPush",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/ContractOrderPush.java"
}, {
    "name": "AccountRemoteVO",
    "package": "com.dr.oursp.retail.player.reference.vo",
    "type": "class",
    "imports": ["com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.consts.YunXiaoConstants", "com.dr.oursp.retail.player.reference.consts.YunXiaoSexTypeEnum", "com.dr.support.enums.Enumerations", "com.dr.support.serialization.Serializations", "com.google.common.collect.Sets", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings"],
    "class_name": "AccountRemoteVO extends BaseRemoteVO",
    "extend_name": "BaseRemoteVO",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/vo/AccountRemoteVO.java"
}, {
    "name": "SupplierRemoteVO",
    "package": "com.dr.oursp.retail.player.reference.vo",
    "type": "class",
    "imports": ["com.dr.oursp.infra.account.consts.AccountTypeEnum", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.retail.player.reference.consts.YunXiaoConstants", "com.dr.oursp.retail.remote.yunxiao.api.http.req.SupplierCoalVariety", "com.dr.oursp.retail.remote.yunxiao.api.http.req.SupplierSendAddress", "com.dr.support.serialization.Serializations", "com.google.common.collect.Sets", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotBlank", "java.util.List"],
    "class_name": "SupplierRemoteVO extends BaseRemoteVO",
    "extend_name": "BaseRemoteVO",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/vo/SupplierRemoteVO.java"
}, {
    "name": "TradeOrderRemoteVO",
    "package": "com.dr.oursp.retail.player.reference.vo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.AccurateNumber", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "TradeOrderRemoteVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/vo/TradeOrderRemoteVO.java"
}, {
    "name": "MoneyAccountVO",
    "package": "com.dr.oursp.retail.player.reference.vo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank", "java.math.BigDecimal"],
    "class_name": "MoneyAccountVO extends BasicInterRequest",
    "extend_name": "BasicInterRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/vo/MoneyAccountVO.java"
}, {
    "name": "FixtureRemoteVO",
    "package": "com.dr.oursp.retail.player.reference.vo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.CommonFileInfo", "com.dr.support.enums.KeyValueEnum", "lombok.Data", "lombok.experimental.Accessors", "java.util.List"],
    "class_name": "FixtureRemoteVO extends BasicInterRequest",
    "extend_name": "BasicInterRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/vo/FixtureRemoteVO.java"
}, {
    "name": "PurchaserRemoteVO",
    "package": "com.dr.oursp.retail.player.reference.vo",
    "type": "class",
    "imports": ["com.dr.oursp.infra.account.consts.AccountTypeEnum", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.CommonFileInfo", "com.dr.oursp.retail.player.reference.consts.YunXiaoConstants", "com.dr.oursp.retail.remote.yunxiao.api.http.req.PurchaserEntrustRequest", "com.dr.oursp.retail.remote.yunxiao.api.http.req.PurchaserReceivingAddressRequest", "com.dr.support.enums.KeyValueEnum", "com.dr.support.serialization.Serializations", "com.google.common.collect.Sets", "lombok.Data", "lombok.experimental.Accessors", "org.apache.logging.log4j.util.Strings", "javax.validation.constraints.NotBlank", "java.util.List"],
    "class_name": "PurchaserRemoteVO extends BaseRemoteVO",
    "extend_name": "BaseRemoteVO",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/vo/PurchaserRemoteVO.java"
}, {
    "name": "BaseRemoteVO",
    "package": "com.dr.oursp.retail.player.reference.vo",
    "type": "class",
    "imports": ["lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "lombok.experimental.Accessors"],
    "class_name": "BaseRemoteVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/vo/BaseRemoteVO.java"
}, {
    "name": "IdentityRemoteRelationRepository",
    "package": "com.dr.oursp.retail.player.reference.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.reference.entity.IdentityRemoteRelationEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.List", "java.util.Optional"],
    "class_name": "IdentityRemoteRelationRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/repository/IdentityRemoteRelationRepository.java"
}, {
    "name": "AccountIdentityRemoteRelationAggregation",
    "package": "com.dr.oursp.retail.player.reference.repository",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.account.proxy.MoneyAccountRemoteRelationEntity", "com.dr.oursp.retail.player.account.proxy.MoneyAccountRemoteRelationRepository", "com.dr.oursp.retail.player.reference.consts.RemoteRelationModelConvert", "com.dr.oursp.retail.player.reference.entity.AccountRemoteRelationEntity", "com.dr.oursp.retail.player.reference.entity.AccountUntreatedLogEntity", "com.dr.oursp.retail.player.reference.entity.IdentityRemoteRelationEntity", "com.dr.oursp.retail.player.reference.vo.AccountRemoteVO", "com.dr.oursp.retail.player.reference.vo.BaseRemoteVO", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "org.springframework.transaction.annotation.Transactional", "javax.validation.constraints.NotBlank", "javax.validation.constraints.PositiveOrZero", "java.util.List", "java.util.Optional"],
    "class_name": "AccountIdentityRemoteRelationAggregation",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/repository/AccountIdentityRemoteRelationAggregation.java"
}, {
    "name": "AccountUntreatedLogRepository",
    "package": "com.dr.oursp.retail.player.reference.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.reference.entity.AccountUntreatedLogEntity", "org.springframework.data.mongodb.repository.MongoRepository"],
    "class_name": "AccountUntreatedLogRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/repository/AccountUntreatedLogRepository.java"
}, {
    "name": "AccountRemoteRelationRepository",
    "package": "com.dr.oursp.retail.player.reference.repository",
    "type": "interface",
    "imports": ["com.dr.oursp.retail.player.reference.entity.AccountRemoteRelationEntity", "org.springframework.data.mongodb.repository.MongoRepository", "java.util.Optional"],
    "class_name": "AccountRemoteRelationRepository extends MongoRepository",
    "extend_name": "MongoRepository",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/repository/AccountRemoteRelationRepository.java"
}, {
    "name": "AccountUntreatedLogEntity",
    "package": "com.dr.oursp.retail.player.reference.entity",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.vo.AccountRemoteVO", "com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.*", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "AccountUntreatedLogEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/entity/AccountUntreatedLogEntity.java"
}, {
    "name": "IdentityRemoteRelationEntity",
    "package": "com.dr.oursp.retail.player.reference.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "IdentityRemoteRelationEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/entity/IdentityRemoteRelationEntity.java"
}, {
    "name": "AccountRemoteRelationEntity",
    "package": "com.dr.oursp.retail.player.reference.entity",
    "type": "class",
    "imports": ["com.dr.oursp.strategy.basic.entity.mongo.BasicDocumentEntity", "lombok.Data", "lombok.EqualsAndHashCode", "org.springframework.data.annotation.Id", "org.springframework.data.mongodb.core.index.Indexed", "org.springframework.data.mongodb.core.mapping.Document"],
    "class_name": "AccountRemoteRelationEntity extends BasicDocumentEntity",
    "extend_name": "BasicDocumentEntity",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/entity/AccountRemoteRelationEntity.java"
}, {
    "name": "YunXiaoCapitalAccountManagerProxy",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.CapitalAccountVo", "com.dr.oursp.retail.player.account.changing.ChangingCapitalAccount", "com.dr.oursp.retail.player.account.consts.TransferAmountTypeEnum", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferRequestException", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferResponseException", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxy", "com.dr.oursp.retail.player.account.proxy.detail.CapitalBehaviorDetail", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.player.reference.vo.MoneyAccountVO", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.api.ServiceResponse", "lombok.AllArgsConstructor", "lombok.Data", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Component", "javax.validation.constraints.NotNull", "java.io.IOException"],
    "class_name": "YunXiaoCapitalAccountManagerProxy implements CapitalAccountManagerProxy",
    "extend_name": "",
    "implements_name": ["CapitalAccountManagerProxy"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/YunXiaoCapitalAccountManagerProxy.java"
}, {
    "name": "YunXiaoInvokeImpl",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.ContractOrderPush", "com.dr.oursp.retail.player.reference.consts.CheckStateEnum", "com.dr.oursp.retail.player.reference.consts.FixtureTypeEnum", "com.dr.oursp.retail.player.reference.entity.IdentityRemoteRelationEntity", "com.dr.oursp.retail.player.reference.repository.IdentityRemoteRelationRepository", "com.dr.oursp.retail.player.reference.vo.FixtureRemoteVO", "com.dr.oursp.retail.player.reference.vo.PurchaserRemoteVO", "com.dr.oursp.retail.player.reference.vo.TradeOrderRemoteVO", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.enums.Enumerations", "com.dr.support.serialization.Serializations", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Component", "org.springframework.util.Assert", "java.util.Optional"],
    "class_name": "YunXiaoInvokeImpl implements ContractOrderPush",
    "extend_name": "",
    "implements_name": ["ContractOrderPush"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/YunXiaoInvokeImpl.java"
}, {
    "name": "DrsInvokeFeignClientImpl",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.response.AsyncResponse", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.response.PublishDataResponse", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.response.ServiceRequestResponse", "com.dr.oursp.retail.player.reference.consts.DrsConstantInfo", "com.dr.oursp.retail.player.reference.consts.DrsDataNodeInfo", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.serialization.Serializations", "lombok.NonNull", "lombok.extern.slf4j.Slf4j", "org.springframework.retry.annotation.Backoff", "org.springframework.retry.annotation.Recover", "org.springframework.retry.annotation.Retryable", "org.springframework.stereotype.Service", "javax.validation.Valid", "javax.validation.constraints.NotBlank"],
    "class_name": "DrsInvokeFeignClientImpl",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/DrsInvokeFeignClientImpl.java"
}, {
    "name": "DrsInvokeFeignClient",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao",
    "type": "interface",
    "imports": ["org.springframework.cloud.openfeign.FeignClient", "org.springframework.web.bind.annotation.PostMapping", "org.springframework.web.bind.annotation.RequestBody"],
    "class_name": "DrsInvokeFeignClient",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/DrsInvokeFeignClient.java"
}, {
    "name": "YunXiaoEncrypt",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "lombok.extern.slf4j.Slf4j", "org.apache.commons.codec.digest.DigestUtils", "org.apache.logging.log4j.util.Strings", "org.springframework.context.annotation.Configuration", "java.time.Instant"],
    "class_name": "YunXiaoEncrypt",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/YunXiaoEncrypt.java"
}, {
    "name": "ServiceRequestResponse",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.response",
    "type": "class",
    "imports": ["com.dr.support.serialization.Serializations", "lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "ServiceRequestResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/dto/response/ServiceRequestResponse.java"
}, {
    "name": "PublishDataResponse",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.response",
    "type": "class",
    "imports": ["com.dr.support.serialization.Serializations", "lombok.AllArgsConstructor", "lombok.Data", "lombok.NoArgsConstructor", "lombok.experimental.Accessors", "org.springframework.stereotype.Component", "javax.validation.constraints.NotBlank"],
    "class_name": "PublishDataResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/dto/response/PublishDataResponse.java"
}, {
    "name": "AsyncResponse",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.response",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "AsyncResponse",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/dto/response/AsyncResponse.java"
}, {
    "name": "PublishDataRequest",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "PublishDataRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/dto/request/PublishDataRequest.java"
}, {
    "name": "CommonFileInfo",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "CommonFileInfo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/dto/request/CommonFileInfo.java"
}, {
    "name": "BasicInterRequest",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "BasicInterRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/dto/request/BasicInterRequest.java"
}, {
    "name": "ServiceResponseDataRequest",
    "package": "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request",
    "type": "class",
    "imports": ["io.swagger.annotations.ApiModelProperty", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "ServiceResponseDataRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/yunxiao/dto/request/ServiceResponseDataRequest.java"
}, {
    "name": "DrPayCenterFeignException",
    "package": "com.dr.oursp.retail.player.reference.caller.pay.exception",
    "type": "class",
    "imports": [],
    "class_name": "DrPayCenterFeignException extends Exception",
    "extend_name": "Exception",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/pay/exception/DrPayCenterFeignException.java"
}, {
    "name": "DrPayResponseCodeEnum",
    "package": "com.dr.oursp.retail.player.reference.caller.pay.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "DrPayResponseCodeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/caller/pay/consts/DrPayResponseCodeEnum.java"
}, {
    "name": "DrsConstantInfo",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "class",
    "imports": [],
    "class_name": "DrsConstantInfo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/DrsConstantInfo.java"
}, {
    "name": "YunXiaoConstants",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "class",
    "imports": [],
    "class_name": "YunXiaoConstants",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/YunXiaoConstants.java"
}, {
    "name": "YunXiaoSexTypeEnum",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "enum",
    "imports": ["com.dr.oursp.infra.account.consts.SexTypeEnum", "com.dr.support.enums.KeyValueEnum", "lombok.Getter", "org.apache.commons.lang3.StringUtils", "org.apache.logging.log4j.util.Strings"],
    "class_name": "YunXiaoSexTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/YunXiaoSexTypeEnum.java"
}, {
    "name": "YunXiaoOrgAccountEnum",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "YunXiaoOrgAccountEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/YunXiaoOrgAccountEnum.java"
}, {
    "name": "YunXiaoOrgTypeEnum",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.Enumerations", "com.dr.support.enums.KeyValueEnum", "java.util.Optional"],
    "class_name": "YunXiaoOrgTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/YunXiaoOrgTypeEnum.java"
}, {
    "name": "DrsDataNodeInfo",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors", "org.springframework.boot.context.properties.ConfigurationProperties", "org.springframework.context.annotation.Configuration"],
    "class_name": "DrsDataNodeInfo",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/DrsDataNodeInfo.java"
}, {
    "name": "RemoteRelationModelConvert",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "class",
    "imports": ["com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.account.proxy.MoneyAccountRemoteRelationEntity", "com.dr.oursp.retail.player.reference.entity.AccountRemoteRelationEntity", "com.dr.oursp.retail.player.reference.entity.IdentityRemoteRelationEntity", "com.dr.oursp.retail.player.reference.vo.BaseRemoteVO", "javax.validation.constraints.NotNull", "java.util.Optional"],
    "class_name": "RemoteRelationModelConvert",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/RemoteRelationModelConvert.java"
}, {
    "name": "CheckStateEnum",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "CheckStateEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/CheckStateEnum.java"
}, {
    "name": "FixtureTypeEnum",
    "package": "com.dr.oursp.retail.player.reference.consts",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "FixtureTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/player/reference/consts/FixtureTypeEnum.java"
}, {
    "name": "CarrierAccountRemoteVO",
    "package": "com.dr.oursp.retail.remote.zhonghuan.vo",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.vo.BaseRemoteVO", "io.swagger.annotations.ApiModelProperty", "lombok.Builder", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "CarrierAccountRemoteVO extends BaseRemoteVO",
    "extend_name": "BaseRemoteVO",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/zhonghuan/vo/CarrierAccountRemoteVO.java"
}, {
    "name": "ZhongHuanConstants",
    "package": "com.dr.oursp.retail.remote.zhonghuan.constants",
    "type": "class",
    "imports": [],
    "class_name": "ZhongHuanConstants",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/zhonghuan/constants/ZhongHuanConstants.java"
}, {
    "name": "LogisticsRemoteApi",
    "package": "com.dr.oursp.retail.remote.zhonghuan.api",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.logistics.reference.dto.request.BidSubmitRequest", "com.dr.oursp.retail.logistics.reference.dto.request.DeliveryRequest", "com.dr.oursp.retail.logistics.reference.dto.request.PerformWaybillAcceptRequest", "com.dr.oursp.retail.logistics.reference.dto.request.TrunkConfirmRequest", "com.dr.oursp.retail.remote.zhonghuan.service.LogisticsRemoteService", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.Api", "io.swagger.annotations.ApiOperation", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.web.bind.annotation.PostMapping", "org.springframework.web.bind.annotation.RequestBody", "org.springframework.web.bind.annotation.RequestMapping", "org.springframework.web.bind.annotation.RestController", "javax.validation.Valid"],
    "class_name": "LogisticsRemoteApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/zhonghuan/api/LogisticsRemoteApi.java"
}, {
    "name": "LogisticsRemoteService",
    "package": "com.dr.oursp.retail.remote.zhonghuan.service",
    "type": "class",
    "imports": ["com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.retail.app.service.PlanWaybillService", "com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.logistics.reference.dto.request.BidSubmitRequest", "com.dr.oursp.retail.logistics.reference.dto.request.DeliveryRequest", "com.dr.oursp.retail.logistics.reference.dto.request.PerformWaybillAcceptRequest", "com.dr.oursp.retail.logistics.reference.dto.request.TrunkConfirmRequest", "com.dr.oursp.retail.logistics.reference.repository.LogisticsRemoteRelationAggregation", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.vo.RetailPlayerVo", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.trade.module.bid.TradeBidRecordVo", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.consts.IdentityTypeEnum", "com.dr.oursp.strategy.basic.identity.entity.IdentityEntity", "com.dr.oursp.strategy.basic.tag.preset.BasicTagSystem", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.stereotype.Service", "java.util.Optional", "java.util.Set"],
    "class_name": "LogisticsRemoteService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/zhonghuan/service/LogisticsRemoteService.java"
}, {
    "name": "YunXiaoActionTypeEnum",
    "package": "com.dr.oursp.retail.remote.yunxiao.constants",
    "type": "enum",
    "imports": ["com.dr.support.enums.KeyValueEnum"],
    "class_name": "YunXiaoActionTypeEnum implements KeyValueEnum",
    "extend_name": "",
    "implements_name": ["KeyValueEnum"],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/constants/YunXiaoActionTypeEnum.java"
}, {
    "name": "PlayerRemoteApi",
    "package": "com.dr.oursp.retail.remote.yunxiao.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.ApiUrlConst", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.PublishDataRequest", "com.dr.oursp.retail.remote.yunxiao.api.http.req.*", "com.dr.oursp.retail.remote.yunxiao.constants.YunXiaoActionTypeEnum", "com.dr.oursp.retail.remote.yunxiao.service.PlayerRemoteService", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.serialization.Serializations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.Api", "io.swagger.annotations.ApiOperation", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.util.Assert", "org.springframework.web.bind.annotation.PostMapping", "org.springframework.web.bind.annotation.RequestBody", "org.springframework.web.bind.annotation.RequestMapping", "org.springframework.web.bind.annotation.RestController", "javax.validation.Valid", "java.util.Objects"],
    "class_name": "PlayerRemoteApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/PlayerRemoteApi.java"
}, {
    "name": "YunXiaoInterAspect",
    "package": "com.dr.oursp.retail.remote.yunxiao.api",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.YunXiaoEncrypt", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.token.Current", "com.dr.oursp.strategy.setting.PlatformSetting", "com.dr.support.serialization.Serializations", "lombok.extern.slf4j.Slf4j", "org.aspectj.lang.ProceedingJoinPoint", "org.aspectj.lang.annotation.Around", "org.aspectj.lang.annotation.Aspect", "org.aspectj.lang.annotation.Before", "org.aspectj.lang.annotation.Pointcut", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.stereotype.Component", "java.math.BigDecimal", "java.util.Map", "java.util.Objects"],
    "class_name": "YunXiaoInterAspect",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/YunXiaoInterAspect.java"
}, {
    "name": "QualityRemoteApi",
    "package": "com.dr.oursp.retail.remote.yunxiao.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.ApiUrlConst", "com.dr.oursp.retail.app.service.param.QualityReportCommonModifyParam", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.CommonFileInfo", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.PublishDataRequest", "com.dr.oursp.retail.quality.consts.QualityProvidesNodeEnum", "com.dr.oursp.retail.quality.consts.QualityTypeEnum", "com.dr.oursp.retail.remote.yunxiao.api.http.req.CoalMimeQualityRequest", "com.dr.oursp.retail.remote.yunxiao.service.QualityRemoteService", "com.dr.oursp.retail.support.RangeNumber", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.serialization.Serializations", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.Api", "io.swagger.annotations.ApiOperation", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.web.bind.annotation.PostMapping", "org.springframework.web.bind.annotation.RequestBody", "org.springframework.web.bind.annotation.RequestMapping", "org.springframework.web.bind.annotation.RestController", "javax.validation.Valid", "java.math.BigDecimal", "java.util.stream.Collectors"],
    "class_name": "QualityRemoteApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/QualityRemoteApi.java"
}, {
    "name": "DrsYunXiaoInterAnno",
    "package": "com.dr.oursp.retail.remote.yunxiao.api",
    "type": "interface",
    "imports": ["java.lang.annotation.*"],
    "class_name": "DrsYunXiaoInterAnno",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/DrsYunXiaoInterAnno.java"
}, {
    "name": "DrsYunXiaoReceiveApi",
    "package": "com.dr.oursp.retail.remote.yunxiao.api",
    "type": "class",
    "imports": ["com.dr.oursp.globe.http.ApiUrlConst", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.PublishDataRequest", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.response.PublishDataResponse", "com.dr.oursp.retail.remote.yunxiao.api.http.req.*", "com.dr.oursp.retail.remote.yunxiao.constants.YunXiaoActionTypeEnum", "com.dr.oursp.retail.remote.yunxiao.service.PlayerRemoteService", "com.dr.oursp.retail.remote.yunxiao.service.QualityRemoteService", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.support.serialization.Serializations", "com.dr.support.trace.LogElapsedTime", "io.swagger.annotations.Api", "io.swagger.annotations.ApiOperation", "lombok.extern.slf4j.Slf4j", "org.springframework.beans.factory.annotation.Autowired", "org.springframework.util.Assert", "org.springframework.web.bind.annotation.PostMapping", "org.springframework.web.bind.annotation.RequestBody", "org.springframework.web.bind.annotation.RequestMapping", "org.springframework.web.bind.annotation.RestController", "javax.validation.Valid", "java.util.Objects"],
    "class_name": "DrsYunXiaoReceiveApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/DrsYunXiaoReceiveApi.java"
}, {
    "name": "PurchaserReceivingAddressRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "PurchaserReceivingAddressRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/PurchaserReceivingAddressRequest.java"
}, {
    "name": "CoalMimeQualityRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.CommonFileInfo", "lombok.Data", "lombok.experimental.Accessors", "java.util.List"],
    "class_name": "CoalMimeQualityRequest extends BasicInterRequest",
    "extend_name": "BasicInterRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/CoalMimeQualityRequest.java"
}, {
    "name": "MoneyAccountRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "MoneyAccountRequest extends BasicInterRequest",
    "extend_name": "BasicInterRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/MoneyAccountRequest.java"
}, {
    "name": "SupplierCoalVariety",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "SupplierCoalVariety",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/SupplierCoalVariety.java"
}, {
    "name": "OrgInfoRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["lombok.Data", "java.util.Objects"],
    "class_name": "OrgInfoRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/OrgInfoRequest.java"
}, {
    "name": "SupplierRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "com.dr.oursp.retail.player.reference.vo.SupplierRemoteVO", "lombok.Data", "lombok.experimental.Accessors", "org.springframework.beans.BeanUtils", "java.util.List"],
    "class_name": "SupplierRequest extends BasicInterRequest",
    "extend_name": "BasicInterRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/SupplierRequest.java"
}, {
    "name": "PurchaserRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.CommonFileInfo", "com.dr.oursp.retail.player.reference.vo.PurchaserRemoteVO", "lombok.Data", "lombok.experimental.Accessors", "org.springframework.beans.BeanUtils", "javax.validation.constraints.NotBlank", "java.util.List"],
    "class_name": "PurchaserRequest extends BasicInterRequest",
    "extend_name": "BasicInterRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/PurchaserRequest.java"
}, {
    "name": "PurchaserEntrustRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "PurchaserEntrustRequest",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/PurchaserEntrustRequest.java"
}, {
    "name": "MgrAccountRequest",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.caller.yunxiao.dto.request.BasicInterRequest", "lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotEmpty", "java.util.LinkedList"],
    "class_name": "MgrAccountRequest extends BasicInterRequest",
    "extend_name": "BasicInterRequest",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/MgrAccountRequest.java"
}, {
    "name": "YunXiaoModelConvert",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.reference.vo.AccountRemoteVO", "com.dr.oursp.retail.remote.yunxiao.service.vo.MoneyAccountRemoteVO", "com.dr.oursp.retail.remote.yunxiao.service.vo.YunXiaoOrgInfoVO", "org.springframework.beans.BeanUtils", "java.util.LinkedList", "java.util.stream.Collectors"],
    "class_name": "YunXiaoModelConvert",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/YunXiaoModelConvert.java"
}, {
    "name": "SupplierSendAddress",
    "package": "com.dr.oursp.retail.remote.yunxiao.api.http.req",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors"],
    "class_name": "SupplierSendAddress",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/api/http/req/SupplierSendAddress.java"
}, {
    "name": "QualityRemoteService",
    "package": "com.dr.oursp.retail.remote.yunxiao.service",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.QualityService", "com.dr.oursp.retail.app.service.param.QualityReportCommonModifyParam", "com.dr.support.trace.LogElapsedTime", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.util.Assert", "java.util.Objects"],
    "class_name": "QualityRemoteService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/service/QualityRemoteService.java"
}, {
    "name": "PlayerRemoteService",
    "package": "com.dr.oursp.retail.remote.yunxiao.service",
    "type": "class",
    "imports": ["com.dr.oursp.infra.account.consts.AccountTypeEnum", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.infra.account.entity.PhoneAssociateEntity", "com.dr.oursp.infra.account.service.AccountService", "com.dr.oursp.infra.account.service.PhoneLoginService", "com.dr.oursp.infra.ajc.AppJointCertService", "com.dr.oursp.infra.ajc.api.http.request.ConfigItem", "com.dr.oursp.infra.ajc.api.http.response.AppJointCertDefineResponse", "com.dr.oursp.infra.app.api.http.request.auth.AppAuthDetailRequest", "com.dr.oursp.infra.app.consts.AppAuthActionEnum", "com.dr.oursp.infra.app.consts.AppAuthEnum", "com.dr.oursp.infra.app.preset.AppConst", "com.dr.oursp.infra.app.preset.WisdomTransportationSalePerspective", "com.dr.oursp.infra.app.service.AppManagerService", "com.dr.oursp.retail.app.service.PartnerService", "com.dr.oursp.retail.app.service.PlayerService", "com.dr.oursp.retail.globe.PlatformTypeEnum", "com.dr.oursp.retail.globe.config.mongo.MongoRetailConfig", "com.dr.oursp.retail.partner.RetailRole", "com.dr.oursp.retail.partner.consts.PartnerLevelEnum", "com.dr.oursp.retail.partner.domain.PartnerVO", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.consts.SignedStateEnum", "com.dr.oursp.retail.player.reference.consts.YunXiaoOrgAccountEnum", "com.dr.oursp.retail.player.reference.consts.YunXiaoOrgTypeEnum", "com.dr.oursp.retail.player.reference.entity.AccountRemoteRelationEntity", "com.dr.oursp.retail.player.reference.entity.IdentityRemoteRelationEntity", "com.dr.oursp.retail.player.reference.repository.AccountIdentityRemoteRelationAggregation", "com.dr.oursp.retail.player.reference.vo.AccountRemoteVO", "com.dr.oursp.retail.player.reference.vo.PurchaserRemoteVO", "com.dr.oursp.retail.player.reference.vo.SupplierRemoteVO", "com.dr.oursp.retail.remote.yunxiao.service.vo.MoneyAccountRemoteVO", "com.dr.oursp.retail.remote.yunxiao.service.vo.YunXiaoOrgInfoVO", "com.dr.oursp.strategy.basic.entity.consts.EntityStateEnum", "com.dr.oursp.strategy.basic.identity.IdentityManager", "com.dr.oursp.strategy.basic.identity.consts.IdentityStateEnum", "com.dr.oursp.strategy.basic.identity.consts.IdentityTypeEnum", "com.dr.oursp.strategy.basic.identity.entity.IdentityEntity", "com.dr.oursp.strategy.basic.tag.preset.BasicTagSystem", "com.dr.support.enums.Enumerations", "com.dr.support.serialization.Serializations", "com.dr.support.trace.LogElapsedTime", "com.google.common.collect.Lists", "com.google.common.collect.Maps", "lombok.extern.slf4j.Slf4j", "org.apache.logging.log4j.util.Strings", "org.springframework.stereotype.Service", "org.springframework.transaction.annotation.Transactional", "org.springframework.util.Assert", "javax.validation.Valid", "java.math.BigDecimal", "java.time.LocalDateTime", "java.time.ZoneOffset", "java.util.*", "java.util.stream.Collectors"],
    "class_name": "PlayerRemoteService",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/service/PlayerRemoteService.java"
}, {
    "name": "MoneyAccountRemoteVO",
    "package": "com.dr.oursp.retail.remote.yunxiao.service.vo",
    "type": "class",
    "imports": ["lombok.Data", "lombok.experimental.Accessors", "javax.validation.constraints.NotBlank"],
    "class_name": "MoneyAccountRemoteVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/service/vo/MoneyAccountRemoteVO.java"
}, {
    "name": "YunXiaoOrgInfoVO",
    "package": "com.dr.oursp.retail.remote.yunxiao.service.vo",
    "type": "class",
    "imports": ["com.dr.oursp.infra.account.consts.AccountTypeEnum", "com.dr.oursp.infra.account.entity.AccountInfoEntity", "com.dr.oursp.retail.player.reference.consts.YunXiaoConstants", "com.dr.oursp.retail.player.reference.consts.YunXiaoOrgTypeEnum", "com.dr.support.serialization.Serializations", "com.google.common.collect.Sets", "lombok.AllArgsConstructor", "lombok.Data", "org.apache.logging.log4j.util.Strings", "java.util.Objects", "java.util.Set"],
    "class_name": "YunXiaoOrgInfoVO",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/yunxiao/service/vo/YunXiaoOrgInfoVO.java"
}, {
    "name": "PayCenterRemoteApi",
    "package": "com.dr.oursp.retail.remote.pay.api",
    "type": "class",
    "imports": ["com.dr.oursp.retail.globe.RetailAppApiUrlConst", "com.dr.oursp.retail.remote.pay.api.consts.PayApiUrlConst", "com.dr.oursp.retail.remote.pay.api.http.request.SignAccountCapitalAsyncPayRequest", "com.dr.oursp.retail.remote.pay.service.PayCenterCallbackHandler", "com.dr.oursp.strategy.api.GlobeServiceResultEnum", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.support.trace.LogElapsedTime", "com.dr.support.trace.LogElapsedTimeScope", "io.swagger.annotations.Api", "io.swagger.annotations.ApiParam", "lombok.extern.slf4j.Slf4j", "org.springframework.web.bind.annotation.*", "java.util.Map"],
    "class_name": "PayCenterRemoteApi",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/api/PayCenterRemoteApi.java"
}, {
    "name": "SignAccountCapitalAsyncPayRequest",
    "package": "com.dr.oursp.retail.remote.pay.api.http.request",
    "type": "class",
    "imports": ["com.dr.oursp.third.pay.http.response.SignAccountCapitalPayResponse"],
    "class_name": "SignAccountCapitalAsyncPayRequest extends SignAccountCapitalPayResponse",
    "extend_name": "SignAccountCapitalPayResponse",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/api/http/request/SignAccountCapitalAsyncPayRequest.java"
}, {
    "name": "PayApiUrlConst",
    "package": "com.dr.oursp.retail.remote.pay.api.consts",
    "type": "class",
    "imports": [],
    "class_name": "PayApiUrlConst",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/api/consts/PayApiUrlConst.java"
}, {
    "name": "PayCenterCallbackHandler",
    "package": "com.dr.oursp.retail.remote.pay.service",
    "type": "class",
    "imports": ["com.dr.domain.ModifierException", "com.dr.oursp.retail.player.account.CapitalAccount", "com.dr.oursp.retail.player.account.consts.CapitalAccountManagerTypeEnum", "com.dr.oursp.retail.player.account.consts.TransferBehaviorEnum", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxy", "com.dr.oursp.retail.player.account.proxy.CapitalAccountManagerProxyFactory", "com.dr.oursp.retail.player.account.proxy.callback.PayCenterCallBackParamsForPayment", "com.dr.oursp.retail.player.account.proxy.callback.PayCenterCallbackParamsForBidMargin", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.player.account.repo.CapitalAccountRepository", "com.dr.oursp.retail.player.reference.caller.pay.consts.DrPayResponseCodeEnum", "com.dr.oursp.retail.remote.pay.api.http.request.SignAccountCapitalAsyncPayRequest", "com.dr.oursp.retail.remote.pay.service.event.*", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.strategy.api.ServiceResponse", "com.dr.oursp.third.pay.http.response.CapitalChangingReceipt", "com.dr.support.enums.Enumerations", "com.dr.support.trace.LogElapsedTime", "com.fasterxml.jackson.databind.DeserializationFeature", "com.fasterxml.jackson.databind.ObjectMapper", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Service", "org.springframework.util.Assert", "java.math.BigDecimal", "java.util.List", "java.util.Map"],
    "class_name": "PayCenterCallbackHandler",
    "extend_name": "",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/PayCenterCallbackHandler.java"
}, {
    "name": "DrPayCommodityBidMarginEvent",
    "package": "com.dr.oursp.retail.remote.pay.service.event",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "lombok.Getter", "lombok.experimental.SuperBuilder", "java.math.BigDecimal"],
    "class_name": "DrPayCommodityBidMarginEvent extends DrPayCallbackEvent",
    "extend_name": "DrPayCallbackEvent",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/event/DrPayCommodityBidMarginEvent.java"
}, {
    "name": "DrPayEventDriver",
    "package": "com.dr.oursp.retail.remote.pay.service.event",
    "type": "class",
    "imports": ["com.dr.oursp.retail.support.event.LocalEventDriver", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component"],
    "class_name": "DrPayEventDriver extends LocalEventDriver",
    "extend_name": "LocalEventDriver",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/event/DrPayEventDriver.java"
}, {
    "name": "DrPayCarWaybillBidEvent",
    "package": "com.dr.oursp.retail.remote.pay.service.event",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "lombok.Getter", "lombok.experimental.SuperBuilder"],
    "class_name": "DrPayCarWaybillBidEvent extends DrPayCallbackEvent",
    "extend_name": "DrPayCallbackEvent",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/event/DrPayCarWaybillBidEvent.java"
}, {
    "name": "DrPayEventListener",
    "package": "com.dr.oursp.retail.remote.pay.service.event",
    "type": "class",
    "imports": ["com.dr.oursp.retail.app.service.CommodityService", "com.dr.oursp.retail.app.service.ExecuteOrderService", "com.dr.oursp.retail.app.service.PlanWaybillService", "com.dr.oursp.retail.app.service.order.WaybillTradeOrderService", "com.dr.oursp.retail.player.account.exception.CapitalAccountTransferException", "com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "com.dr.oursp.retail.support.AccurateNumber", "com.dr.oursp.retail.support.event.AbstractEventListener", "com.google.common.eventbus.Subscribe", "lombok.extern.slf4j.Slf4j", "org.springframework.stereotype.Component", "javax.annotation.PostConstruct", "java.io.IOException", "java.math.BigDecimal"],
    "class_name": "DrPayEventListener extends AbstractEventListener",
    "extend_name": "AbstractEventListener",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/event/DrPayEventListener.java"
}, {
    "name": "DrPayPlanWaybillBidMarginEvent",
    "package": "com.dr.oursp.retail.remote.pay.service.event",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "lombok.Getter", "lombok.experimental.SuperBuilder", "java.math.BigDecimal"],
    "class_name": "DrPayPlanWaybillBidMarginEvent extends DrPayCallbackEvent",
    "extend_name": "DrPayCallbackEvent",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/event/DrPayPlanWaybillBidMarginEvent.java"
}, {
    "name": "DrPayExecuteOrderBidEvent",
    "package": "com.dr.oursp.retail.remote.pay.service.event",
    "type": "class",
    "imports": ["com.dr.oursp.retail.player.account.proxy.receipt.CapitalBehaviorReceipt", "lombok.Getter", "lombok.experimental.SuperBuilder"],
    "class_name": "DrPayExecuteOrderBidEvent extends DrPayCallbackEvent",
    "extend_name": "DrPayCallbackEvent",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/event/DrPayExecuteOrderBidEvent.java"
}, {
    "name": "DrPayCallbackEvent",
    "package": "com.dr.oursp.retail.remote.pay.service.event",
    "type": "abstract class",
    "imports": ["com.dr.oursp.retail.support.event.Event", "lombok.Getter", "lombok.experimental.SuperBuilder"],
    "class_name": "DrPayCallbackEvent extends Event",
    "extend_name": "Event",
    "implements_name": [],
    "file_name": "/Volumes/mac\u5de5\u4f5c/workplace/dr/dr_strategy/service-provider/src/main/java/com/dr/oursp/retail/remote/pay/service/event/DrPayCallbackEvent.java"
}];
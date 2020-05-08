"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = require("./services/api");
const app = express_1.default();
const port = Number(process.env.PORT) || 3000;
app.use(cors_1.default());
app.get('/api/v1/subsets', (_, res) => __awaiter(this, void 0, void 0, function* () {
    const subsets = yield api_1.getSubsets();
    return res.json(subsets).send();
}));
app.get('/api/v1/subsets/:subsetId/institutions', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const subsetId = req.params.subsetId;
    try {
        const institutions = yield api_1.getInstitutions(subsetId);
        return res.json(institutions).send();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}));
app.get('/api/v1/subsets/:subsetId/institutions/:institutionId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { subsetId, institutionId } = req.params;
    try {
        const institution = yield api_1.getInstitution(subsetId, parseInt(institutionId));
        return res.json(institution).send();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}));
app.get('/api/v1/subsets/:subsetId/object/:objectId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { subsetId, objectId } = req.params;
    try {
        const institutionObject = yield api_1.getObject(subsetId, parseInt(objectId));
        return res.json(institutionObject).send();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}));
app.get('/api/v1/subsets/:subsetId/institutions/:institutionId/collections', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { subsetId, institutionId } = req.params;
    try {
        const institution = yield api_1.getInstitution(subsetId, Number(institutionId));
        return res.json(institution.collections).send();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}));
app.get('/api/v1/subsets/:subsetId/institutions/:institutionId/collections/:collectionId', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { subsetId, institutionId, collectionId } = req.params;
    try {
        const institutionCollection = yield api_1.getCollection(subsetId, Number(institutionId), Number(collectionId));
        return res.json(institutionCollection).send();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}));
app.get('/api/v1/subsets/:subsetId/institutions/:institutionId/collections/:collectionId/objects', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const { subsetId, institutionId, collectionId } = req.params;
    try {
        const collectionObjects = yield api_1.getObjects({
            subsetId,
            institutionId: Number(institutionId),
            collectionId: Number(collectionId),
        });
        return res.json(collectionObjects).send();
    }
    catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}));
app.listen(port, (error) => {
    if (!error) {
        console.log(`Server is listening at port ${port}`);
    }
    else {
        console.log(error);
    }
});
//# sourceMappingURL=app.js.map
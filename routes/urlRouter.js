"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UrlController_1 = __importDefault(require("../src/controllers/UrlController"));
const router = (0, express_1.Router)();
router.get('/', UrlController_1.default.index);
router.post('/', UrlController_1.default.store);
router.get('/:id', UrlController_1.default.show);
exports.default = router;

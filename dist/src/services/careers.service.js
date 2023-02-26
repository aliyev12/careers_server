"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.getOne = exports.getMultiple = void 0;
const client_1 = require("@prisma/client");
const interfaces_1 = require("../interfaces");
const prisma = new client_1.PrismaClient();
function getMultiple(page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        const jobApplications = yield prisma.jobApplication.findMany();
        return { jobApplications };
    });
}
exports.getMultiple = getMultiple;
function getOne(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const jobApplication = yield prisma.jobApplication.findUnique({
            where: { id },
        });
        return { jobApplication };
    });
}
exports.getOne = getOne;
function create(newJobApplication) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jobApplication = yield prisma.jobApplication.create({
                data: newJobApplication,
            });
            return { status: interfaces_1.EStatus.success, data: jobApplication };
        }
        catch (error) {
            return { status: interfaces_1.EStatus.fail, data: error };
        }
    });
}
exports.create = create;
function update(id, newJobApplication) {
    return __awaiter(this, void 0, void 0, function* () {
        const jobApplication = yield prisma.jobApplication.update({
            where: { id },
            data: newJobApplication,
        });
        return { jobApplication };
    });
}
exports.update = update;
function remove(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const jobApplication = yield prisma.jobApplication.delete({
            where: { id },
        });
        return { jobApplication };
    });
}
exports.remove = remove;

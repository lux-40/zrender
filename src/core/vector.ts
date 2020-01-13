import { MatrixArray } from "./matrix";

/* global Float32Array */

const ArrayCtor = typeof Float32Array === 'undefined'
    ? Array
    : Float32Array;

export type VectorArray = Float32Array | number[]
/**
 * 创建一个向量
 */
export function create(x?: number, y?: number): VectorArray {
    const out = new ArrayCtor(2);
    if (x == null) {
        x = 0;
    }
    if (y == null) {
        y = 0;
    }
    out[0] = x;
    out[1] = y;
    return out;
}

/**
 * 复制向量数据
 */
export function copy(out: VectorArray, v: VectorArray): VectorArray {
    out[0] = v[0];
    out[1] = v[1];
    return out;
}

/**
 * 克隆一个向量
 */
export function clone(v: VectorArray): VectorArray {
    const out = new ArrayCtor(2);
    out[0] = v[0];
    out[1] = v[1];
    return out;
}

/**
 * 设置向量的两个项
 */
export function set(out: VectorArray, a: number, b: number): VectorArray {
    out[0] = a;
    out[1] = b;
    return out;
}

/**
 * 向量相加
 */
export function add(out: VectorArray, v1: VectorArray, v2: VectorArray): VectorArray {
    out[0] = v1[0] + v2[0];
    out[1] = v1[1] + v2[1];
    return out;
}

/**
 * 向量缩放后相加
 */
export function scaleAndAdd(out: VectorArray, v1: VectorArray, v2: VectorArray, a: number) {
    out[0] = v1[0] + v2[0] * a;
    out[1] = v1[1] + v2[1] * a;
    return out;
}

/**
 * 向量相减
 */
export function sub(out: VectorArray, v1: VectorArray, v2: VectorArray) {
    out[0] = v1[0] - v2[0];
    out[1] = v1[1] - v2[1];
    return out;
}

/**
 * 向量长度
 */
export function len(v: VectorArray): number {
    return Math.sqrt(lenSquare(v));
}
export const length = len;

/**
 * 向量长度平方
 */
export function lenSquare(v: VectorArray): number {
    return v[0] * v[0] + v[1] * v[1];
}
export const lengthSquare = lenSquare;

/**
 * 向量乘法
 */
export function mul(out: VectorArray, v1: VectorArray, v2: VectorArray) {
    out[0] = v1[0] * v2[0];
    out[1] = v1[1] * v2[1];
    return out;
}

/**
 * 向量除法
 */
export function div(out: VectorArray, v1: VectorArray, v2: VectorArray) {
    out[0] = v1[0] / v2[0];
    out[1] = v1[1] / v2[1];
    return out;
}

/**
 * 向量点乘
 */
export function dot(v1: VectorArray, v2: VectorArray) {
    return v1[0] * v2[0] + v1[1] * v2[1];
}

/**
 * 向量缩放
 */
export function scale(out: VectorArray, v: VectorArray, s: number): VectorArray {
    out[0] = v[0] * s;
    out[1] = v[1] * s;
    return out;
}

/**
 * 向量归一化
 */
export function normalize(out: VectorArray, v: VectorArray): VectorArray {
    const d = len(v);
    if (d === 0) {
        out[0] = 0;
        out[1] = 0;
    }
    else {
        out[0] = v[0] / d;
        out[1] = v[1] / d;
    }
    return out;
}

/**
 * 计算向量间距离
 */
export function distance(v1: VectorArray, v2: VectorArray): number {
    return Math.sqrt(
        (v1[0] - v2[0]) * (v1[0] - v2[0])
        + (v1[1] - v2[1]) * (v1[1] - v2[1])
    );
}
export const dist = distance;

/**
 * 向量距离平方
 */
export function distanceSquare(v1: VectorArray, v2: VectorArray): number {
    return (v1[0] - v2[0]) * (v1[0] - v2[0])
        + (v1[1] - v2[1]) * (v1[1] - v2[1]);
}
export const distSquare = distanceSquare;

/**
 * 求负向量
 */
export function negate(out: VectorArray, v: VectorArray): VectorArray {
    out[0] = -v[0];
    out[1] = -v[1];
    return out;
}

/**
 * 插值两个点
 */
export function lerp(out: VectorArray, v1: VectorArray, v2: VectorArray, t: number): VectorArray {
    out[0] = v1[0] + t * (v2[0] - v1[0]);
    out[1] = v1[1] + t * (v2[1] - v1[1]);
    return out;
}

/**
 * 矩阵左乘向量
 */
export function applyTransform(out: VectorArray, v: VectorArray, m: MatrixArray): VectorArray {
    const x = v[0];
    const y = v[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}

/**
 * 求两个向量最小值
 */
export function min(out: VectorArray, v1: VectorArray, v2: VectorArray): VectorArray {
    out[0] = Math.min(v1[0], v2[0]);
    out[1] = Math.min(v1[1], v2[1]);
    return out;
}

/**
 * 求两个向量最大值
 */
export function max(out: VectorArray, v1: VectorArray, v2: VectorArray): VectorArray {
    out[0] = Math.max(v1[0], v2[0]);
    out[1] = Math.max(v1[1], v2[1]);
    return out;
}
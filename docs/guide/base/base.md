# 基础方法列举

## 是否是一个可用的数组

```js
isAbleArray(arr);
```

## 是否是一个可用的对象

```js
isAbleObject(obj);
```

## 是否是一个可用的 set

```js
isAbleSet(set);
```

## 是否是一个可用的 map

```js
isAbleMap(map);
```

## 是否是一个可用的字符串

```js
isAbleString(str);
```

## 是否是一个可用的数字

```js
isAbleNumber(num);
```

## 是否是一个可用的函数

```js
isAbleFn(bool);
```

## 是否是基本类型数组

```js
isBaseTypeArray(arr);
```

## 是否是对象数组

```js
isObjectArray(arr);
```

## 纠正数字

```js
/**
 * @description 纠正数字
 * @param {Number} num
 * @example reviseNumber(NaN) => 0
 * @example reviseNumber(null) => 0
 * @example reviseNumber(undefined) => 0
 */
reviseNumber(num);
```

## 返回数组长度

```js
arrayLength(arr);
```

## 数组转字符串

```js
/**
 * @param {Array} arr
 * @param {String} stringIdentifier
 * @description 数组转字符串
 * @example arrToStr([1,2,3], ',') => '1,2,3'
 */
arrToStr(arr, stringIdentifier);
```

## 字符串转数组

```js
/**
 * @param {String} str
 * @param {String} stringIdentifier
 * @description 字符串转数组
 * @example strToArr('1,2,3', ',') => [1,2,3]
 */
strToArr(str, stringIdentifier);
```

## 返回对象的值数组

```js
/**
 * @param {Object} obj
 * @description 返回对象的值数组
 * @example getObjetValues({a:1,b:2}) => [1,2]
 */
getObjetValues(obj);
```

## 返回对象的键数组

```js
/**
 * @param {Object} obj
 * @description 返回对象的键数组
 * @example getObjetKeys({a:1,b:2}) => ['a','b']
 */
getObjetKeys(obj);
```

## 返回对象的键值对数组

```js
/**
 * @param {Object} obj
 * @description 返回对象的键值对数组
 * @example getObjetEntries({a:1,b:2}) => [['a',1],['b',2]]
 */
getObjectEntries(obj);
```

## 返回 map 大小

```js
/**
 * @param {Map} map
 * @description 返回map 大小
 * @example getMapSize(new Map([['a',1],['b',2]])) => 2
 */
getMapSize(map);
```

## 返回 set 大小

```js
/**
 * @param {Set} set
 * @description 返回set 大小
 * @example getSetSize(new Set([1,2,3])) => 3
 */
getSetSize(set);
```

## 对象是否包含某个键

```js
/**
 * @param {Object} obj
 * @param {String} key
 * @description 对象是否包含某个键
 * @example objIsContainsKey({a:1},'a') => true
 */
objIsContainsKey(obj,key)
```
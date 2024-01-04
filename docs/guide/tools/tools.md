# 工具函数列举


## 两个数组的交集

```js
/**
 * @param { string[] | number[] | Array<object> } arr
 * @param { string[] | number[] | Array<object> } arr2
 * @param { string } key
 * @returns { Array }
 * @description 获取数组1对于数组2的交集
 * @description 如果都是基本类型数组,key不需要传
 */
getIntersection(arr1, arr2,key)
```


## 两个数组的对称差集

```js
/**
 * @param {  Array<object> } arr
 * @param {  Array<object> } arr2
 * @param { string } key
 * @returns { Array }
 * @description 返回对称差集
 * @example getSymmetricDifference([{id:1},{id:2},{id:3}], [{id:1},{id:2},{id:4}], 'id') => [{id:3},{id:4}]
 */
getSymmetricDifference(arr1, arr2,key)
```

## 数组转换为map

```js
/**
 * @param {  Array } arr
 * @param { string } key
 * @returns { Map }
 * @description 将数组转换成map,并且以key为map的key
 * @description 该方法会缓存结果
 */
genderMapAndSetMapKey(arr, key)
```


## 解析url参数

```js
/**
 * @description 解析url参数
 * @returns { Object }
 * @example parseLocationUrlParams() => {id:1,name:'test'}
 * @description web
 */
parseLocationUrlParams()
```


## 返回千分位

```js
/**
 * @description 返回千分位
 * @returns { string }
 */
toThousands(num)
```

##  隐藏手机号中间四位

```js
/**
 * @description 隐藏手机号中间四位
 * @returns { string }
 */
hidePhone(phone)
```


##  睡眠函数

```js
/**
 * @param { number } time
 * @returns { Promise  }  { promises: Promise }
 * @returns { cancel } { cancel: Function  }
 * @example sleep(1000).then(res => console.log(res)) => sleep end
 * @description 睡眠函数
 * @description 可以取消睡眠 通过返回的cancel函数
 */
sleep(time)
```


## 延迟函数

```js
/**
 *  @param { Function } fn
 *  @param { number } count 默认为2
 *  @returns { Function }
 *  @description 函数执行n次后才会执行
 *  @example const fn = after(() => console.log('after'), 3);
*/
after(fn, count)
```

## 标签页之间通信

```js
/**
 * @description 不同标签页之间通信
 * @returns { Object  } sendMessage: Function, receiveMessage: Function
 * @example const { sendMessage, receiveMessage } = initBroadcastChannel('userInformation');
 * @example sendMessage('userInformation', { name: '张三' });
 * @example receiveMessage((data) => console.log(data));
 */
initBroadcastChannel(messageInfo)
```

## 数组去重

```js
/**
 * @description 数组去重
 * @description 去除对象数组中的重复项
 * @description 如果不传入key，则认为是基本类型数组
 * @returns { Array }
 * @param { Array } arr
 * @param { string } key
*/
uniqueArray(arr,key)
```

## 模糊搜索对象数组

```js
/**
 * @description 模糊搜索对象数组
 * @returns { Array }
 * @param { string } keyWord 
 * @param { string } key
 * @description 如果不传入key，则认为是基本类型数组
*/
fuzzySearch(arr, keyWord, key)
```
## 返回当前时间

```js

/**
 * @description 方法是12小时制
 * @description 返回当前时间
 * @example getCurrentDateForChina() => 2021年1月1日星期五 下午4:00
 * @example getCurrentDateForChina(false) => 2021年1月1日星期五 16:00
 */
getCurrentDateForChina(isTwelveHours)
```

## 拷贝

```js
/**
 * @description 初始化一次 
 * @description 内部会判断是否支持clipboard、不支持则使用document.execCommand
 * @description 返回值为true表示拷贝成功
 * @param { string } value 当前需要拷贝的内容
 */
 const ClipboardInstance = new Clipboard();
 const res = await ClipboardInstance.copyTextByClipboard(value);
```

## 获取拷贝的内容

```js
/**
 * @description 初始化一次 
 * @description 内部会判断是否支持clipboard、不支持则使用document.execCommand
 * @description 返回值为你拷贝的内容
 */
 const ClipboardInstance = new Clipboard();
 const res = await ClipboardInstance.readTextByClipboard();
```
# MVIEW


#### Header
```
<Header title="标题" border back>标题</Header>
```
| 属性 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :--: |
| title | 标题的值，可以修改title标签的值 | String | - |
| border | 给header添加底部边框线 | - | - |
| back | 给header添加返回按钮 | Boolean | false |

---

#### Content
```
<Content>内容</Content>
```

---

#### Flex AND FlexItem
```
<Flex center>
    <FlexItem>MVIEW</FlexItem>
    <FlexItem>MVIEW</FlexItem>
    <FlexItem>MVIEW <div ellipsis="2">需要两行省略的内容</div></FlexItem>
</Flex>
```
| 属性 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :--: |
| center | 内容模块上下居中对齐 | - | - |
| end | 内容模块居下对齐 | - | - |
| ellipsis | 内容多行省略 | Number | 1 |

---

#### Login
```
<Login @login="login" :option="option" />
```

| 属性 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :--: |
| option | 配置参数 | Object | {} |
| type | 账号输入框type | String | text |
| accountPlaceholder | 账号输入框placeholder值 | String | - |
| passwordPlaceholder | 密码输入框placeholder值 | String | 0 |

option

| 属性 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :--: |
| verifyMobile | 是否验证手机号 | Boolean | false |
| verifyEmail | 是否验证邮箱 | Boolean | false |
| verifyLength | 是否验证密码长度 | Boolean | false |
| minLength | 验证密码最小长度 | Number | 0 |
| maxLength | 验证密码最大长度 | Number | 100 |

| 事件 | 说明 | 返回值 |
| :--: | :--: | :--: |
| login | 登录点击时触发 | 账号及密码 ```{account: '', password: ''}``` |

#### Toaster
```
this.$toaster.show(content, type);
```
| 属性 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :--: |
| content | 提示内容 | String | - |
| type | 提示类型 | Number | 0 |

#### 弹框
```
// 传一个参数即为提示内容
this.$alert.show('提示内容');

// 传两个参数即为提示标题和内容
this.$alert.show('提示标题', '提示内容');

// 传三个参数即为提示标题、内容、按钮配置
this.$alert.show('提示标题', '提示内容', () => {
    // 确定按钮点击回调
});

this.$alert.show('提示标题', '提示内容', [
    {
        text: 'Cancel',
        on: () => {
            // 取消按钮点击回调
        }
    },
    {
        text: 'Sure',
        on: () => {
            // 确定按钮点击回调
        }
    }
]);
```
| 属性 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :--: |
| title | 提示标题 | String | 提示 |
| content | 提示内容 | String | - |
| args | 按钮配置及方法 | Array/Function | - |

#### Loading
```
this.$loading.show(type, content);
```
| 属性 | 说明 | 类型 | 默认值 |
| :--: | :--: | :--: | :--: |
| content | 提示内容 | String | - |
| type | 加载loading类型 | Number | 0 |

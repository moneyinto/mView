import Alert from './alert.vue';

export default (Vue) => {
    const AlertController = Vue.extend(Alert);
    let instance = new AlertController().$mount();

    Vue.prototype.$alert = () => {};

    Vue.prototype.$alert.show = (...args) => {
        if (args.length === 0) return;

        // 初始化
        instance.title = '提示';
        instance.showCancel = false;
        instance.cancelText = '取消';
        instance.sureText = '确定';
        instance.onCancel = function() {};
        instance.onSure = function() {};

        if (args.length === 1) {
            instance.content = args[0];
            document.body.appendChild(instance.$el);
            return;
        }

        instance.title = args[0];
        instance.content = args[1];
        if (typeof args[2] === 'function') {
            instance.onSure = args[2];
        } else if (typeof args[2] === 'object') {
            if (args[2].length === 2) {
                instance.showCancel = true;
                instance.cancelText = args[2][0].text;
                instance.onCancel = args[2][0].on || function() {};
                instance.sureText = args[2][1].text;
                instance.onSure = args[2][1].on || function() {};
            }
        }
        document.body.appendChild(instance.$el);
    };
};

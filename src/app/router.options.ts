// 本代码用于阻止自动滚动行为

// 导入 Nuxt 的路由配置类型
import type { RouterConfig } from "@nuxt/schema";

// 导出具体配置对象
export default <RouterConfig> {
    // 定义导航的滚动条行为
    scrollBehavior(to, from, savedPosition) {
        // 回归原位
        // if(savedPosition) {
        //     return savedPosition
        // }
        // scrollBehavior 函数返回空对象 `{}`时，阻止任何自动滚动行为
        console.log(
          '%c[Router] scrollBehavior triggered.',
          'color: blue; font-weight: bold;'
        );
        console.log(`  - From: ${from.path}`);
        console.log(`  - To:   ${to.path}`);
        console.log('  - savedPosition:', savedPosition);
        console.log('  - Returning {} to prevent auto-scroll.');
        return {}
    }
}
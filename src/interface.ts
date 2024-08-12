
import { SelectorProps } from "@roo/roo/Selector"
/**
 * 继承自 @roo/Selector，在其基础上增加了以下字段：
 * @date 4/25/2022 - 3:59:55 PM
 *
 * @export
 * @interface MultipleSelectProps
 * @typedef {MultipleSelectProps}
 *

 * @param isDev - 环境，默认是test
 * @param tenantCode - 主体code

 */
export interface MultipleSelectProps  {
    env?: "test" | "st" | "prod",
    type?: "number",
    tenantCode?: number | string,
  //   className?: 'string'
  }
  
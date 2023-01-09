import type { ComputedRef } from "vue";

export interface UpdatableInjectedValue<T> {
 updateValue: (data: T) => void;
 getValue: ComputedRef<T | null>;
}

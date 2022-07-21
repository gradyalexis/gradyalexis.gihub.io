import Vue from 'vue';
import { Component } from 'nuxt-property-decorator';

@Component
export class Classname extends Vue {
  get classList(): string[] {
    return [
      ...(this.$vnode.data?.staticClass || '').split(' '),
      ...(this.$vnode.parent?.data?.staticClass || '').split(' '),
    ];
  }

  overridesClassByPrefix(prefix: string, type?: 'exact'): boolean {
    return !this.getClassByPrefix(prefix, type);
  }

  getClassByPrefix(prefix: string, type?: 'exact'): string | undefined {
    return this.vNodeClass.find((v) =>
      v.match(new RegExp(this.classRegex(prefix, type), 'ig'))
    );
  }

  isHasType(type?: string): boolean {
    return typeof type !== 'undefined';
  }

  classRegex(prefix: string, type?: string) {
    return this.isHasType(type) && type === 'exact' ? `^${prefix}$` : prefix;
  }

  get vNodeClass() {
    return this.classList.map(this.mapToPrefix);
  }

  private mapToPrefix(str: string): string {
    return str || '';
  }
}

export default Classname;

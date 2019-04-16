function toArray<T = any>(args: ArrayLike<T>, start?: number): T[] {
  start = start || 0;
  const params: T[] = [];
  for (let index = start, len = args.length; index < len; index++) {
    params[index - start] = args[index];
  }
  return params;
}

export default toArray;

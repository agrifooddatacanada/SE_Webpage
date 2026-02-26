/**
 * Returns the full path for a public asset (e.g. images).
 * Required for GitHub Pages where the app is served from a subpath.
 */
export const imgPath = (path: string) =>
  import.meta.env.BASE_URL + path.replace(/^\//, '');

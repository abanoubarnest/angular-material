import { Injectable } from '@angular/core';

@Injectable()
export class StackedBarChartService {
  public testFunction(x, k) {
    return Math.round(((Math.random() * 0.15 + 1.15) * (200 - 2 * x) * k) * 1000 / x);
  }

  public *getTestGraph(k) {
    yield* Array(30).fill(undefined)
      .map((_, i) => 1 + i)
      .map(code => ({
        x: code,
        y: this.testFunction(code, k),
      }));
  }
}


export class TestComponent {
  public object = {
    a: false,
    c: true,
    b: false,
  };
}

import { AAAA, NAME } from './export';

export class Test2Component {
  private prive = false;
  public var = true;

  public noUnreachable(x: number) {
    return x + 2;

    if (x > 2) {
      return 1;
    }
  }

  public emptyFunction(): void {

  }

  public maxDepthAndComplexity(x: number): void {
    if (x > 5) {
      if (x === 3) {
        if (x < 2) {
          if (x === x) {
            if (4 + 3 === x) {
              if (x + 1 + 5 === x) {
                if (true) {
                  if (x + 3 === x) {
                    // do stuff
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  public functionTest(_one: string, two: string): void {
    const name = NAME;
    const age = AAAA;

    const obj = {
      'FullLength_)123': 120,
      'name': name,
      'age': age,
    };

    const b = { one: 1, two: 2, three: 3 };
    const array = [1,
      2,
      3,
      4];

    // dot location
    const result = b
      .one
      + b.two
      + b.three;

    // multiline-ternary
    const result2 = result > 4 ? 'Iskander' : 'Michiel';

    array.map((x) => x + 1)
      .filter((x) => x > 2);

    const operatorLinebreak = 1
      + 2
      + 3;

    const operatorLinebreak2 = 1
      + 2
      + 3;
  }

  private testfunwithaverylongnameyesyesyesyeysyesyesyeysyes(): void {
    const veryLongUrl = 'https://www.aijowdioawdiuhadiuhaiuwdawiyudaiwbcaiuwnaiuwchaiwuciauwcbaiuwcbaiuwcbiuawciubawc.google.nl';
  }

  private noInferrableTypes(a: number, b: number): number {
    const num = 4;
    return b;
  }

  private noExtraArguments(): number {
    const number = this.noInferrableTypes(1, 2);

    if (new Date().toISOString() > '2024') {
      return 4;
    }

    // no-shadow
    [1, 2, 3].map((number) => {
      return number + 1;
    });

    const obj = { a: 1, b: 2, c: 3 };
    // prefer optional chain
    if (obj?.a) {
      return number;
    }

    // array callback return
    [1, 2, 3].map(() => {
      this.prive = false;
      return 6;
    });

    // switch case with too few cases
    switch (number) {
      case 1:
        return 1;
      default:
        return 2;
    }
  }
}

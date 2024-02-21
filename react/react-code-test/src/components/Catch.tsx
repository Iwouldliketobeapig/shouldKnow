import { ErrorInfo, PureComponent } from 'react';

type State = {
  hasError: boolean;
}

type Props = {
  hasError: boolean
}

class CatchComponet extends PureComponent<any, State> {

  constructor() {
    super(null);
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: !!err,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo, '-------------------')
  }

  render() {
    if (this.state.hasError) {
      return '右一个错误'
    }
    return this.props.children;
  }
}

export default CatchComponet
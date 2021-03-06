import React, { Component } from "react";
import Modal from "../../component/UI/Modal/Modal";
import Aux from "../../hoc/Aux";
const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
      state = {
          error:null,
      }
      componentWillMount()
      {
       this.reqInterceptor =  axios.interceptors.request.use(null,error=>{
            this.setState({error:error});
        })
        this.resInterceptor =  axios.interceptors.response.use(null,error=>{
            this.setState({error:error});
        })
      }
      componentWillUnmount()
      {
          console.log('Will unmount');
        axios.interceptors.request.eject(this.reqInterceptor);
        axios.interceptors.request.eject(this.resInterceptor);
      }
      errorConfirmHandler = ()=>{
          this.setState({error:null});
      }
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>{this.state.error?this.state.error.message:null}</Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default WithErrorHandler;

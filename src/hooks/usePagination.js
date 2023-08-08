import React, {useState} from 'react';
import helper from '../constants/helper';
import server from '../server';

export const PAGINATION_MODE = {
  loading: {
    loading: true,
    refresh: false,
    loadMore: false,
  },
  loadMore: {
    loading: false,
    refresh: false,
    loadMore: true,
  },
  refreshing: {
    loading: false,
    refresh: true,
    loadMore: false,
  },
};

const usePagination = () => {
  const [state, setState] = useState({
    loading: false,
    loadMore: false,
    refreshing: false,
  });

  const setLoadingState = value => {
    setState(prevState => ({
      ...prevState,
      loading: value.loading,
      refreshing: value.refreshing,
      loadMore: value.loadMore,
    }));
  };

  const getPaginationData = async ({
    loading,
    refresh,
    loadMore,
    param,
    next_page,
    url,
    onSuccess,
    onFailed,
  }) => {
    setLoadingState({loading, refreshing: refresh, loadMore});
    try {
      const resp = await server[url](refresh || loading ? 1 : next_page, param);
      setLoadingState({loading: false, refreshing: false, loadMore: false});
      if (!resp.ok) {
        helper.apiResponseErrorHandler(resp);
        onFailed && onFailed(resp.data);
      } else {
        onSuccess && onSuccess({data: resp.data, loading, refresh, loadMore});
      }
    } catch (error) {
      setLoadingState({loading: false, refreshing: false, loadMore: false});
      console.log(error);
      onFailed && onFailed(error);
    }
  };

  return {
    getPaginationData,
    state,
  };
};

export default usePagination;

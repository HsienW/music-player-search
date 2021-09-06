import React, {useState, useEffect, useCallback} from 'react';
import {getSearch} from '../../api';
import {createParamRoute} from '../../../../common/util';
import {filteredEmptyImage, filteredSongEmptyImage} from '../../../../common/util';
import {CardItem} from '../../components';
import {Divider, Skeleton, Input, Tabs} from 'antd';
import queryString from 'query-string';
import './genre.scss';

const {Search} = Input;
const {TabPane} = Tabs;

export const Genre = (props) => {
    const {observer, observerKey} = {...props};

    let [searchKey, changeSearchKey] = useState('');
    let [getSearchApiState, changeSearchApiState] = useState(false);
    let [searchResultAlbumsState, changeSearchResultAlbumsState] = useState(false);
    let [searchResultArtistsState, changeSearchResultArtistsState] = useState(false);
    let [searchResultSongsState, changeSearchResultSongsState] = useState(false);
    let [searchData, changeSearchData] = useState([]);
    let [searchResultAlbums, changeSearchResultAlbums] = useState([]);
    let [searchResultArtists, changeSearchResultArtists] = useState([]);
    let [searchResultSongs, changeSearchResultSongs] = useState([]);

    const doSearch = (key) => {
        if (key) {
            getSearch(key)
                .then((respond) => {
                    changeSearchKey(key);
                    changeSearchResultAlbums(filteredEmptyImage(respond['albums']['items']));
                    changeSearchResultArtists(filteredEmptyImage(respond['artists']['items']));
                    changeSearchResultSongs(filteredSongEmptyImage(respond['tracks']['items']));
                    changeSearchResultAlbumsState(true);
                    changeSearchResultArtistsState(true);
                    changeSearchResultSongsState(true);
                    changeSearchApiState(true);
                })
                .catch((error) => {
                    console.log(error);
                    changeSearchResultAlbumsState(false);
                    changeSearchResultArtistsState(false);
                    changeSearchResultSongsState(false);
                    changeSearchApiState(false);
                });
        }
    };

    useEffect(() => {
        const searchKey = queryString.parse(location.search);
        if (searchKey.query) {
            doSearch(searchKey.query);
        }
    }, [changeSearchKey, changeSearchResultAlbums, changeSearchResultArtists, changeSearchResultSongs, changeSearchApiState]);

    const onSearchInput = useCallback(async (key) => {
        let newRouteURL = createParamRoute(
            '/search/genre',
            {query: key}
        );
        observer.doPublish(observerKey.route.routeNavigation, newRouteURL);

        doSearch(key);

    }, [changeSearchKey, changeSearchResultAlbums, changeSearchResultArtists, changeSearchResultSongs, changeSearchApiState]);

    const callback = (key) => {
        console.log(key);
    };

    const albumItemClick = (albumItemInfo) => {
        let newRouteURL = createParamRoute(
            '/collection/album',
            {
                id: albumItemInfo.itemId,
                name: albumItemInfo.itemTitle,
                image: albumItemInfo.imageURL,
                artist: albumItemInfo.itemSubtitle
            });
        observer.doPublish(observerKey.route.routeNavigation, newRouteURL);
    };

    const artistItemClick = (artistItemInfo) => {
        let newRouteURL = createParamRoute(
            '/collection/artist',
            {
                id: artistItemInfo.itemId,
                name: artistItemInfo.itemTitle,
                image: artistItemInfo.imageURL,
                artist: artistItemInfo.itemSubtitle
            });
        observer.doPublish(observerKey.route.routeNavigation, newRouteURL);
    };

    const songItemClick = (songItemInfo) => {
        let newRouteURL = createParamRoute(
            '/collection/album',
            {
                id: songItemInfo.itemAlbum.id,
                name: songItemInfo.itemAlbum.name,
                image: songItemInfo.imageURL,
                artist: songItemInfo.itemSubtitle
            });
        observer.doPublish(observerKey.route.routeNavigation, newRouteURL);
    };

    return (
        <>
            <div className={'search-container-title'}>
                <Search
                    placeholder="Search for what you want..."
                    onSearch={onSearchInput}
                    defaultValue={searchKey}
                    style={{width: '40%', minWidth: '200px'}}
                />
            </div>
            <Divider style={{margin: '20 0'}}/>
            {
                getSearchApiState
                    ? <Tabs defaultActiveKey="albums" onChange={callback}>
                        <TabPane tab="Albums" key="search-albums" className={'search-container-content'}>
                            {
                                searchResultAlbumsState
                                    ? searchResultAlbums.map((item) => {
                                        return (
                                            <CardItem
                                                key={item.id}
                                                itemId={item.id}
                                                itemTitle={item.name}
                                                itemHoverable={true}
                                                itemSubtitle={item.artists[0].name}
                                                imageURL={item.images[0].url}
                                                itemClickAction={albumItemClick}
                                                itemStyle={{width: 180}}
                                                itemImageClass={'custom-card-home-img-size'}
                                            >
                                            </CardItem>
                                        );
                                    })
                                    : <Skeleton active={true}/>
                            }
                        </TabPane>
                        <TabPane tab="Artists" key="search-artists" className={'search-container-content'}>
                            {
                                searchResultArtistsState
                                    ? searchResultArtists.map((item) => {
                                        return (
                                            <CardItem
                                                key={item.id}
                                                itemId={item.id}
                                                itemTitle={item.name}
                                                itemHoverable={true}
                                                itemSubtitle={item.name}
                                                imageURL={item.images[0].url}
                                                itemClickAction={artistItemClick}
                                                itemStyle={{width: 180}}
                                                itemImageClass={'custom-card-home-img-size'}
                                            >
                                            </CardItem>
                                        );
                                    })
                                    : <Skeleton active={true}/>
                            }
                        </TabPane>
                        <TabPane tab="Songs" key="search-songs" className={'search-container-content'}>
                            {
                                searchResultSongsState
                                    ? searchResultSongs.map((item) => {
                                        return (
                                            <CardItem
                                                key={item.id}
                                                itemId={item.id}
                                                itemTitle={item.name}
                                                itemHoverable={true}
                                                itemSubtitle={item.artists[0].name}
                                                imageURL={item.album.images[0].url}
                                                itemClickAction={songItemClick}
                                                itemStyle={{width: 180}}
                                                itemImageClass={'custom-card-home-img-size'}
                                                itemAlbum={item.album}
                                            >
                                            </CardItem>
                                        );
                                    })
                                    : <Skeleton active={true}/>
                            }
                        </TabPane>
                    </Tabs>
                    : null
            }
        </>
    );
};

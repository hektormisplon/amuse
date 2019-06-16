import React from 'react'

import axios from 'axios'
import api from '../config/api'

import { ScrollView, ActivityIndicator, StyleSheet, View } from 'react-native'
import Button from '../components/Button'

import { Text } from '../components/StyledText'

/**
 * General news posts relating clubs
 */
class ClubNewsScreen extends React.Component {

    state = {
        news: null,
        article: null
    }

    componentDidMount() {
        this.getNews()
    }

    getNews = () => {
        axios.get(`http://${api}/api/v1/posts/?3`).then(res => {
            const news = res.data
            this.setState({news, loading: false})
        }).catch(err => {
            console.log(err)
            this.setState({loading: false})
        })
    }

    htmlToPlainText = html => {
        html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
        html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
        html = html.replace(/<\/div>/ig, '\n');
        html = html.replace(/<\/li>/ig, '\n');
        html = html.replace(/<li>/ig, '  *  ');
        html = html.replace(/<\/ul>/ig, '\n');
        html = html.replace(/<\/p>/ig, '\n');
        html = html.replace(/<br\s*[\/]?>/gi, "\n");
        html = html.replace(/<[^>]+>/ig, '');
        return html
    }
    
    render() {
        const { news, article} = this.state
        const { navigation } = this.props;
        if(news) {
            return( 
                <View style={styles.container}>
                {article ? (
                    <ScrollView>
                    <View style={styles.articleContainer} key={article.id}>
                        <Text type='title'>{article.title}</Text>
                        <Text type='largeText'>{this.htmlToPlainText(article.body)}</Text>
                        <Button icon="x" onPress={() => {this.setState({article: null})}}><Text>Close article</Text></Button>
                    </View>
                </ScrollView>
                ) : (
                    <React.Fragment>
                        {news.map((article) => {
                            return (
                                <Button onPress={() => {this.setState({article})}}>
                                    <Text>{article.title}</Text>
                                </Button>
                            )
                        })}
                    </React.Fragment>
                )}
                </View>
            )
        } else {
            return <ActivityIndicator/>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:  1,
        margin: 30,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    article: {
        flex: 1
    },
})



export default ClubNewsScreen
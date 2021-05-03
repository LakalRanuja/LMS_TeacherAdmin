import { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'
import Avatar from '@components/avatar'
import htmlToDraft from 'html-to-draftjs'
import { selectThemeColors } from '@utils'
import { Editor } from 'react-draft-wysiwyg'
import Breadcrumbs from '@components/breadcrumbs'
import { EditorState, ContentState } from 'draft-js'

import avatar from '../../../../assets/images/icons/pdf.png'

import avatar2 from '../../../../assets/images/avatars/zoom.png'

import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Media,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  Button
} from 'reactstrap'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'

const BlogEdit = () => {
  const initialContent = `
  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>
  <p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>
  `

  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)

  const [data, setData] = useState(null),
    [title, setTitle] = useState(''),
    [slug, setSlug] = useState(''),
    [status, setStatus] = useState(''),
    [content, setContent] = useState(editorState),
    [blogCategories, setBlogCategories] = useState([]),
    [blogTerms, setTerms] = useState(''),
    [featuredImg, setFeaturedImg] = useState(null),
    [imgPath, setImgPath] = useState('banner.jpg')

  useEffect(() => {
    axios.get('/blog/list/data/edit').then(res => {
      setData(res.data)
      setTitle(res.data.blogTitle)
      setSlug(res.data.slug)
      setBlogCategories(res.data.blogCategories)
      setFeaturedImg(res.data.featuredImage)
      setStatus(res.data.status)
    })
  }, [])

  const lesson = 'Real numbers'
  const contents = 'Number Patterns'
  const startDate = '12-04-2021 3:00'
  const endDate = '12-04-2021 5:00'
  const classs = '11'

  const categories = [
    { value: '11', label: '11' },
    { value: '10', label: '10' },
    { value: '9', label: '9' },
    { value: '8', label: '8' },
    { value: '7', label: '7' }
  ]

  const terms = [
    {value: '1st term', label: '1st Term'},
    {value: '2nd term', label: '2nd Term'},
    {value: '3rd term', label: '3rd Term'}
]

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setFeaturedImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <div className='blog-edit-wrapper'>
      <Breadcrumbs
        breadCrumbTitle='Blog Edit'
        breadCrumbParent='Pages'
        breadCrumbParent2='Blog'
        breadCrumbActive='Edit'
      />
      {data !== null ? (
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <Media>
                  {/* <Avatar className='mr-75' img={data.avatar} width='38' height='38' />
                  <Media body>
                    <h6 className='mb-25'>{data.userFullName}</h6>
                    <CardText>{data.createdTime}</CardText>
                  </Media> */}
                  <h2>Details</h2>
                </Media>
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-title'>Title</Label>
                        {/* <Input id='blog-edit-title' value={title} onChange={e => setTitle(e.target.value)} /> */}
                        {/* <Select 
                          id='blog-edit-term'
                          isClearable={false}
                          theme={selectThemeColors}
                          value={blogTerms}
                          isMulti
                          name='colors'
                          options={terms}
                          className='react-select'
                          classNamePrefix='select'
                          onChange={data => setTerms(data)}
                        /> */} 
                        <Input 
                          type='input'
                          id='blog-edit-terms'
                          value={blogTerms}
                          placeholder="_______"
                          onChange={e => setTerms(e.target.value)}
                        > 
                          {/* <option value='Published'>11</option> */}
                          {/* <option value='Pending'>2nd Term</option>
                          <option value='Draft'>3rd Term</option> */}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-category'>Class</Label>
                        <Input
                          id='blog-edit-category'
                          isClearable={false}
                          theme={selectThemeColors}
                          value={classs}
                          // isMulti
                          name='colors'
                          // options={categories}
                          className='react-select'
                          classNamePrefix='select'
                          onChange={data => setBlogCategories(data)}
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col md='4'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Slug</Label>
                        <Input id='blog-edit-slug' value={slug} onChange={e => setSlug(e.target.value)} />
                      </FormGroup>
                    </Col> */}
                    <Col md='3'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Start Date & Time</Label>
                        <Input placeholder="12-04-2021 3:00" value={startDate} id='blog-edit-slug'/>
                      </FormGroup>
                    </Col>
                    <Col md='3'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>End Date & Time</Label>
                        <Input placeholder="12-04-2021 5:00" value={endDate} id='blog-edit-slug2'/>
                      </FormGroup>
                    </Col>
                    <Col md='3'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Lesson</Label>
                        <Input placeholder="Real Numbers" value={lesson} id='blog-edit-slug3'/>
                      </FormGroup>
                    </Col>
                    <Col md='3'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Content</Label>
                        <Input placeholder="Number patterns" value={contents} id='blog-edit-slug4'/>
                      </FormGroup>
                    </Col>
                    {/* <Col md='4'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Subject 5</Label>
                        <Input id='blog-edit-slug5'/>
                      </FormGroup>
                    </Col>
                    <Col md='4'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Subject 6</Label>
                        <Input id='blog-edit-slug6'/>
                      </FormGroup>
                    </Col> */}
                    {/* <Col md='4'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-status'>Status</Label>
                        <Input
                          type='select'
                          id='blog-edit-status'
                          value={status}
                          onChange={e => setStatus(e.target.value)}
                        >
                          <option value='Published'>Published</option>
                          <option value='Pending'>Pending</option>
                          <option value='Draft'>Draft</option>
                        </Input>
                      </FormGroup>
                    </Col> */}
                    {/* <Col sm='12'>
                      <FormGroup className='mb-2'>
                        <Label>Content</Label>
                        <Editor editorState={content} onEditorStateChange={data => setContent(data)} />
                      </FormGroup>
                    </Col>
                    <Col className='mb-2' sm='12'>
                      <div className='border rounded p-2'>
                        <h4 className='mb-1'>Featured Image</h4>
                        <Media className='flex-column flex-md-row'>
                          <img
                            className='rounded mr-2 mb-1 mb-md-0'
                            src={featuredImg}
                            alt='featured img'
                            width='170'
                            height='110'
                          />
                          <Media body>
                            <small className='text-muted'>Required image resolution 800x400, image size 10mb.</small>

                            <p className='my-50'>
                              <a href='/' onClick={e => e.preventDefault()}>
                                {`C:/fakepath/${imgPath}`}
                              </a>
                            </p>
                            <div className='d-inline-block'>
                              <FormGroup className='mb-0'>
                                <CustomInput
                                  type='file'
                                  id='exampleCustomFileBrowser'
                                  name='customFile'
                                  onChange={onChange}
                                  accept='.jpg, .png, .gif'
                                />
                              </FormGroup>
                            </div>
                          </Media>
                        </Media>
                      </div>
                    </Col> */}
                    {/* -------------------------------------------- */}
                    {/* <Col md='12'>
                    <Input style={{height: '0.5px'}}/>
                    </Col> */}
                    {/* -------------------------------------------- */}
                    {/* <br></br>
                    <Col md='3'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Total Marks</Label>
                        <Input id='blog-edit-slug6'/>
                      </FormGroup>
                    </Col>
                    <Col md='3'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Average</Label>
                        <Input id='blog-edit-slug6'/>
                      </FormGroup>
                    </Col> */}
                    <Media style={{marginBottom: 10, marginRight: 100, marginLeft: 10}}>
                    <Media className='mr-25' left>
                      <Media object className='rounded mr-50' src={avatar} alt='Generic placeholder image' height='80' width='80' />
                    </Media>
                    <Media className='mt-75 ml-1' body>
                      <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
                        Re-Upload
                        <Input type='file' onChange={onChange} hidden accept='image/*' />
                      </Button.Ripple>
                      {/* <Button.Ripple color='secondary' size='sm' outline>
                        Reset
                      </Button.Ripple> */}
                      <p>Upload documents !</p>
                    </Media>
                  </Media>

                  <Col md='3'>
                  <Media className='mr-25' left>
                      <Media object className='rounded mr-50' style={{width: 100, cursor: 'pointer'}} src={avatar2} alt='Generic placeholder image' height='80' width='80' />
                    </Media>
                    </Col>

                    <br></br>
                    <Col className='mt-50' style={{position: 'relative', top: 10}}>
                      <Button.Ripple color='primary' className='mr-1'>
                        Update
                      </Button.Ripple>
                      <Button.Ripple color='secondary' outline>
                        Cancel
                      </Button.Ripple>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </div>
  )
}

export default BlogEdit
